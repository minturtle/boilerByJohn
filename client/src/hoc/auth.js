import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { AuthUser } from "../_action/user_action.js";

export default function Auth(SpecifiedComponent, ShouldLogin , ShouldAdmin = false){
	
	function AuthenticationCheck(props){
		var dispatch = useDispatch();
	useEffect(()=>{
		dispatch(AuthUser()).then((res)=>{
			console.log(res.payload);
		});
	})
		return <SpecifiedComponent />
	}
	
	
	return AuthenticationCheck
}