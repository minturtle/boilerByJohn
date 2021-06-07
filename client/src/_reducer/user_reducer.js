import {LOGIN_USER} from "../_action/types.js";

export default function(state= {}, action){
	switch(action.type){
		case LOGIN_USER:
			return {...state, loginSuccess : action.payload};
		case "AUTH_USER":
			return {...state, user : action.payload};
		default : 
			return state;
	}
}