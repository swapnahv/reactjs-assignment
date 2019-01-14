/*
This container is responsible for displaying the available details of user and the product details.
@axios - this is used for fetching data from the JSON file
*/
import React from 'react';
import axios from 'axios';
import Button from '../Components/button.js';
import Accordion from '../Components/accordion.js';
import Header from '../Components/header.js';

let loginValue = true;

class Dashboard extends React.Component{
	constructor(){
		super()
		this.state = {
			userList:[],
			userDetails : {},
			productDetails: {}
		}
		this.goToEditProfilePage = this.goToEditProfilePage.bind(this);
	}
	goToEditProfilePage() {
		//navigation to edit profile page
		this.props.history.push('/editProfile');
	}
	componentDidMount(){
		axios.get("../data.JSON").then(res => {
			//on successfuly fetching data from JSON file
			this.setState({userDetails: res.data.userDetails});
			this.setState({productDetails: res.data.productDetails});
		}).catch(function(error){
		//Handle error
		console.log(error);
		})
	}
	
	render(){
		return(
		<div>
			<Header loggedInProps = {loginValue} ></Header>
			<div className = "col-md-offset-3 col-md-6 bg-white content">				
				<div className="col-md-12 text-align-center">
					<h3>Dashboard</h3>
				</div>
				<div className = "col-md-12">
									
					<div className = "col-md-6">
						<h4>User details</h4>
						<div className = "col-md-12">
							<div className="col-md-5">
								<label>Name:</label>
							</div>
							<div className="col-md-6">
								<div>{this.state.userDetails.name}</div>
							</div>
						</div>
						<div className = "col-md-12">
							<div className="col-md-5">
								<label>Age:</label>
							</div>
							<div className="col-md-6">
								<div>{this.state.userDetails.Age}</div>
							</div>
						</div>
						<div className = "col-md-12">
							<div className="col-md-5">
								<label>Address:</label>
							</div>
							<div className="col-md-6">
								<div>{this.state.userDetails.Address1}</div>
								<div>{this.state.userDetails.Address2}</div>
								<div>{this.state.userDetails.Address3}</div>
							</div>
						</div>
						<div className = "col-md-12">
							<div className="col-md-5">
								<label>Contact:</label>
							</div>
							<div className="col-md-6">
								<div>{this.state.userDetails.Contact}</div>
							</div>
						</div>
					</div>
					<div className = "col-md-offset-3 col-md-3">
						<Button handleSubmitProps = {this.goToEditProfilePage} btnValue='Edit Profile'></Button>
					</div>
				</div>
				<div className = "col-md-offset-1 col-md-9 mt-20px">
					<Accordion productDetails = {this.state.productDetails}/>
				</div>
			</div>
		</div>
		)
	}
	
}

export default Dashboard;