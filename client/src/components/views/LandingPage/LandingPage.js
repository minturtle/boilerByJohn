import React, {useEffect} from 'react'
import axios from "axios";

function LandingPage(){
	useEffect(()=>{
		axios.get('https://boilerbyjohn-rsxad.run.goorm.io/test').then(res=>console.log(res));
	},[])
	
	return (
	<div style = {{display : 'flex', justifyContent : 'center',
				   alignItems : 'center', width: '100%', height : '100vh'}}>
		Landing Page
	</div>
	)
}

export default LandingPage