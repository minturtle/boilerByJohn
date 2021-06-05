const User = require('../models/user');

let auth = (req,res,next)=>{
	//인증 처리를 하는곳
	let token = req.cookies.x_auth;
	
	//user은 인증처리가 완료된 유저
	User.findByToken(token , (err, user)=>{
		if(err || !user){
			req.token = null;
			req.user= null
		} 
		
		req.token = token;
		req.user = user;

		next();
	})
	
}

module.exports = { auth };