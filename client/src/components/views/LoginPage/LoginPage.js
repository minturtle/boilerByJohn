import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { LoginUser } from '../../../_action/user_action';

function LoginPage(props){
	
	const dispatch = useDispatch();
	const [Email, setEmail] = useState("");
	const [Password , setPassword] = useState("");
	
	
	const onEmailHandler = 
			function(e){
				setEmail(e.target.value);
			}
	
	const onPasswordHandler = 
			function(e){
				setPassword(e.target.value);
			}
	const onSubmitHandler = 
			function(e){
				e.preventDefault();
				let body = {email : Email, password : Password};
				
				dispatch(LoginUser(body)).then((res)=>{
					if(res.payload.loginSuccess){
						props.history.push('/');
					}
					else{
						console.log(res);
					}
				});
			}
	
	
	
	return (
	<div style = {{display : 'flex', justifyContent : 'center',
				   alignItems : 'center', width: '100%', height : '100vh'}}>
		<form 
			style = {{display: 'flex',flexDirection : 'column' }} 
			onSubmit ={onSubmitHandler}>
			<label>Email</label>
			<input 
				type = "email" 
				value = {Email} 
				onChange = {onEmailHandler}/>
			
			<label>Password</label>
			<input 
				type = "password" 
				value ={Password} 
				onChange= {onPasswordHandler}/>
			
			<button>Login</button>
		</form>
	</div>
	)	
	}

export default LoginPage