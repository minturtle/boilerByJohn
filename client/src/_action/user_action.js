import axios from 'axios';
import { LOGIN_USER } from './types.js';

export function LoginUser(data){
	const req = axios.post('https://boilerbyjohn-rsxad.run.goorm.io/login/login', data, {withCredentials: true}).then(res=>{return res.data});
	
	return {type : LOGIN_USER,
		   payload : req};
	
}

export function AuthUser(){
	var req = axios.get('https://boilerbyjohn-rsxad.run.goorm.io/login/auth', {withCredentials : true}).then((req)=>{return req.data});
	
	return {type : "AUTH_USER", payload: req};
}