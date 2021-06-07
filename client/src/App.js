import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginPage from "./components/views/LoginPage/LoginPage.js";
import LandingPage from "./components/views/LandingPage/LandingPage.js";
import Footer from "./components/views/Footer/Footer.js";
import NavBar from "./components/views/NavBar/NavBar.js";
import RegisterPage from "./components/views/RegisterPage/RegisterPage.js";

import Auth from "./hoc/auth.js";

function App() {
  return (
	<Router>
      <div>
        <Switch>
		  	<Route exact path ='/' component = {Auth(LandingPage, false)} />
			<Route exact path ='/login' component = {Auth(LoginPage, false)} />
			<Route exact path ='/register' component = {Auth(RegisterPage, false)} />
	  	</Switch>
      </div>
    </Router>
  );
}

export default App;


