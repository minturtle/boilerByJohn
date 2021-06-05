const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10; //salt가 몇글자인지 , salt는 비밀번호 암호화에 필요
const SECRET_KEY = "akksadkksk@#@!#!";
mongoose.set('useCreateIndex', true)
var userSchema = new mongoose.Schema({
	name :{
		type :String,
		maxlength: 50
	},
	email : {
		type : String,
		minlength : 5,
		trim : true,
		unique : 1
	},
	password :{
		type : String,
		minlength :5
	},
	nickname : {
		type: String,
		minlength : 5
	},
	role : {
		type : Number,
		default : 0
	},
	image : String,
	token : {
		type : String
	},
	tokenExp :{
		type : Number
	}
})

userSchema.pre('save', function(next){
	var user = this;
	if(user.isModified('password')){
		bcrypt.gensalt(saltRounds, (err, salt)=>{
			if(err) return next(err);
			
			bcrypt.hash(user.password, salt, function(err, hash){
				if(err) return next(err);
				user.password = hash;
				next();
			})
		})
	}
	else{
		next();
	}
});
	
userSchema.methods.comparePassword = function(plainPassword, cb){
	bcrypt.compare(plainPassword, this.password, (err, isMatch)=>{
		if(err) return cb(err);
		else cb(null, isMatch);
	
	})
}

userSchema.methods.generateToken = function(cb){
	//jsonwebtoken을 이용해서 token을 생성
	var user = this;
	var token = jwt.sign(user._id.toHexString(), SECRET_KEY);
	
	this.token  = token;
	user.save((err, user)=>{
		if(err)  cb(err);
		else cb(null, user);
	})
	
}

userSchema.statics.findByToken = function(token , cb){
	var user = this;
	
	jwt.verify(token, SECRET_KEY, (err, decodedID)=>{
		user.findOne({"_id" : decodedID, "token" : token }, (err, user)=>{
		if(err) return cb(err);
		if(!user) cb(null ,null);
		cb(null , user);
	})	
	});
	
	
}


module.exports = mongoose.model('User', userSchema);;