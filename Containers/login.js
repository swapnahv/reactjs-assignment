import React from 'react';
import Button from '../Components/button.js';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username:"",
			password:"",
			errorMsg:""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		
	}
	handleSubmit(){
		if(this.state.username === 'Test@gmail.com' && this.state.password === 'Test@123'){
			this.props.history.push('/dashboard');
		}else{
			this.setState({errorMsg: 'Please enter valid credentials'})
		}
	}
	handlePassword(e){
		this.setState({password: e.target.value})
	}
	handleUsername(e){
		this.setState({username: e.target.value})
	}
	render(){
		return(
			<div>
				<h2 className= "text-align-center">Login</h2>
				<div className = "col-md-12 mt-20px">
					<div className="col-md-6">
						<label  className="pull-right">User name:</label>
					</div>
					<div className="col-md-6">
						<input type='text' value={this.state.username} onChange = {this.handleUsername} />
					</div>
				</div>
				<div >
					<div className="col-md-6 mt-20px">
						<label className="pull-right">Password:</label>
					</div>
					<div className="col-md-6 mt-20px">
						<input type='text' value = {this.state.password} onChange = {this.handlePassword}/>
					</div>
				</div>
				<div className="col-md-12 text-align-center">
					<span className="error mt-20px ">{this.state.errorMsg}</span>
				</div>
				<div className="col-md-offset-6 col-md-6 mt-20px">
					<Button handleSubmitProps={this.handleSubmit} disabledProps = {!this.state.username || !this.state.password} btnValue='Login'></Button>
				</div>
			</div>
		)
	}
}

export default Login;