/*
This component is the common header in the application.
@Logo - This displays all the time on header
@Logout button and Current time - these will bedisplayed once the user logs in.
*/

import React from 'react';
import LogoutModal from '../Components/modalWindow.js';
import Logo from '../loGO.png';


class Header extends React.Component{
	constructor(){
		//Constructor it set initial state of the component
		super()
		this.state = {
			currentHour : new Date().getHours(),
			currentMin : new Date().getMinutes()
		}
	}
	render(){
		return(
			<div className="col-md-12 bg-light-blue header">
				<div className = "mt-20px">
					<div className="col-md-6">
						<img src={Logo} alt = "image" className="logo-size"/>
					</div>
					<div className="col-md-5">
						{this.props.loggedInProps ? <LogoutModal/> : null}
					</div>
					<div className="col-md-1">
						{this.props.loggedInProps ? <h3>{this.state.currentHour} : {this.state.currentMin}</h3> : null}
					</div>
				</div>
			</div>
		)
	}
}

export default Header;