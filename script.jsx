/*
This is main page which is responsible for creating store and loads first while running the application.
store - this is the container for state of the application
Provider - responsible for store values to be available for all the components in it.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Components/footer.js';
import Login from './Containers/login.js';
import Dashboard from './Containers/dashboard.js';
import Profile from './Containers/profile.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './Reducers/root-reducer.js'  
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 


let store  = createStore(allReducers);

class MainPage extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
	return(
		<Router history={history}>
			<div>
				<Route exact path = "/" component = {Login}></Route>
				<Route path = "/dashboard" component = {Dashboard}></Route>
				<Route path = "/editProfile" component = {Profile}></Route>
			</div>
		</Router>
	)
}
}

ReactDOM.render(
	<Provider store={store}>
		<MainPage>
		</MainPage>
	</Provider>, document.getElementById("mainContent"));
	
ReactDOM.render(<Footer/>,document.getElementById("footer"));