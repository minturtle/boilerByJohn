import React, {useEffect} from 'react'
import axios from "axios";

function LandingPage(){
	useEffect(()=>{
		axios.get('https://boilerbyjohn-rsxad.run.goorm.io/test').then(res=>console.log(res));
	},[])
	
	var onLogOutHandler = function(e){
		var req = axios.get('https://boilerbyjohn-rsxad.run.goorm.io/login/logout', {withCredentials: true}).then(res=>{
			console.log(res);
		})
	}
	
	return (
	<div style = {{display : 'flex', justifyContent : 'center',
				   alignItems : 'center', width: '100%', height : '100vh'}}>
		Landing Page
		<button onClick = {onLogOutHandler}>log out</button>
	</div>
	)
}

export default LandingPage