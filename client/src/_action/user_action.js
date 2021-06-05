import axios from 'axios';
import { LOGIN_USER } from './types.js';

export function LoginUser(data){
	const req = axios.post('https://boilerbyjohn-rsxad.run.goorm.io/login/login', data).then(res=>{return res.data});
	
	return {type : LOGIN_USER,
		   payload : req};
	
}