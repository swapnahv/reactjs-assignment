import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header.js';
import Footer from './Components/footer.js';
import Login from './Containers/login.js';
import Dashboard from './Containers/dashboard.js';
import Profile from './Containers/profile.js';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class MainPage extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
	return(
		<Router>
			<div>
				<Route exact path = "/" component = {Login}></Route>
				<Route path = "/dashboard" component = {Dashboard}></Route>
				<Route path = "/editProfile" component = {Profile}></Route>
			</div>
		</Router>
	)
}
}

ReactDOM.render(<Header/>,document.getElementById("header"));
ReactDOM.render(<MainPage/>,document.getElementById("content"));
ReactDOM.render(<Footer/>,document.getElementById("footer"));