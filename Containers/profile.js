import React from 'react';
import Button from '../Components/button.js';
import axios from 'axios';
import Header from '../Components/header.js';

let loginValue  = true;

class Profile extends React.Component{
	constructor(){
		super();
		this.state = {
			userDetails:{},
			fieldDisable: true
		}
		this.enableFields = this.enableFields.bind(this);
	}
	
	componentDidMount(){
		axios.get("../data.JSON").then(res => {
			this.setState({userDetails: res.data.userDetails});
		}).catch(function(error){
		//Handle error
		console.log(error);
		})
	}
	
	enableFields () {
		this.setState({fieldDisable: false});
	}
	
	render(){
		return(
		<div>
			<Header loggedInProps = {loginValue} ></Header>
			<div className = "col-md-offset-3 col-md-6 bg-white content">
			<div className="col-md-12">
				<div className="text-align-center">
					<h3>User profile</h3>
				</div>
				
			</div>
			<div className = "col-md-12 mt-20px">
				<div className="col-md-3 pull-right">
					<Button handleSubmitProps = {this.enableFields} btnValue = "Edit"></Button>
				</div>
				<div className = "col-md-9">
						<div className = "col-md-12">
							<div className="col-md-3">
								<label>Name:</label>
							</div>
							<div className="col-md-6">
								<input type="text" value={this.state.userDetails.name} disabled ={this.state.fieldDisable} />
							</div>
						</div>
						<div className = "col-md-12 mt-20px">
							<div className="col-md-3">
								<label>Age:</label>
							</div>
							<div className="col-md-6">
								<input type="text" value={this.state.userDetails.Age} disabled = {this.state.fieldDisable}/>
							</div>
						</div>
						<div className = "col-md-12 mt-20px">
							<div className="col-md-3">
								<label>Contact:</label>
							</div>
							<div className="col-md-6">
								<input type="text" value={this.state.userDetails.Contact} disabled = {this.state.fieldDisable}/>
							</div>
						</div>
						<div className = "col-md-12 mt-20px">
							<div className="col-md-3">
								<label>Address:</label>
							</div>
							<div className="col-md-6">
								<div><input type="text" value={this.state.userDetails.Address1} disabled = {this.state.fieldDisable}/></div>
								<div  className="mt-20px"><input type="text" placeholder = 'Address field' value={this.state.userDetails.Address2} disabled = {this.state.fieldDisable}/></div>
								<div  className="mt-20px"><input type="text" placeholder = 'Address field' value={this.state.userDetails.Address3} disabled = {this.state.fieldDisable}/></div>
							</div>
						</div>
				</div>
				<div className="col-md-offset-5 col-md-2 mt-20px">
				{ this.state.fieldDisable ? null : <Button btnValue = 'Update'/>  }
					
				</div>
			</div>
			</div>
		</div>
		)
	}
}

export default Profile;