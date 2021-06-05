const express = require('express');
const User = require('../models/user');
const router = express.Router();
const { auth } = require('../middleware/auth');

router.post('/login', (req,res)=>{
	User.findOne({email: req.body.email}, (err, user)=>{
		
		if(!user) return res.json({success : false, message : "아이디를 찾을 수 없습니다."});
		user.comparePassword(req.body.password,(err, isMatch)=>{
			if(!isMatch) return res.json({success : false, message : "비밀번호가 틀렸습니다."});
			user.generateToken((err, user)=>{
				if(err) return res.json({success : false, message : "Token error"});
				res.cookie("x_auth", user.token).json({success: true , token : user.token});
			})
		})
	})
})


router.get('/auth',auth,(req,res)=>{
	if(req.user == null) return res.status(404).json({message : "요청실패"});
	res.status(200).json({
		_id : req.user._id,
		isAdmin : req.user.role === 0 ? false : true,
		isAuth : true,
		email : req.user.email
	})
})


router.get('/logout',auth, (req, res)=>{
	if(req.user == null) return res.status(404).json({message : "요청실패"});
	User.findOneAndUpdate({_id : req.user._id}, { token : ""}, (err, user)=>{
		if(err) return res.json({success: false , err});
		res.clearCookie('x_auth');
		res.redirect('/');
		
		
	})
	
})
module.exports = router;