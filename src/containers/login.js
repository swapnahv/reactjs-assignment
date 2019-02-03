/*
This container is holding login form and header.
On successful login, user will navigate to Dashboard page
*/

import React from "react";
import Button from "../components/button";
import Header from "../components/header";
import { connect } from "react-redux";

//Below variable is responsible to hide/show logout button. this is sent as props to header component
//let loginValue = false;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMsg: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.getLoggedInValue = this.getLoggedInValue.bind(this);
  }
  handleSubmit() {
    if (this.state.username !== "") {
      //username validation
      let lastAtPos = this.state.username.lastIndexOf("@");
      let lastDotPos = this.state.username.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          this.state.username.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          this.state.username.length - lastDotPos > 2
        )
      ) {
        this.setState({
          errorMsg:
            "Please enter valid username , user name must be an email id"
        });
      } else if (
        this.state.username === "Test@gmail.com" &&
        this.state.password === "Test@123"
      ) {
        this.props.loginFun();
        this.props.history.push("/dashboard");
      } else {
        this.setState({ errorMsg: "Please enter valid credentials" });
      }
    }
  }

  //Below function are for updating the state values with value entered in input field
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleUsername(e) {
    this.setState({ username: e.target.value });
  }
  getLoggedInValue() {
    return <Header loggedInProps={this.props.loggedIn} />;
  }
  render() {
    return (
      <div>
        {this.getLoggedInValue()}
        <div className="col-md-offset-3 col-md-6 bg-white content">
          <h2 className="text-align-center">
            Login
          </h2>
          <div className="col-md-12 mt-20px">
            <div className="col-md-6">
              <label className="pull-right">User name:</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsername}
              />
            </div>
          </div>
          <div>
            <div className="col-md-6 mt-20px">
              <label className="pull-right">Password:</label>
            </div>
            <div className="col-md-6 mt-20px">
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePassword}
              />
            </div>
          </div>
          <div className="col-md-12 text-align-center">
            <span className="error mt-20px ">{this.state.errorMsg}</span>
          </div>
          <div className="col-md-offset-6 col-md-6 mt-20px">
            <Button
              handleSubmitProps={this.handleSubmit}
              disabledProps={!this.state.username || !this.state.password}
              btnValue="Login"
            />
          </div>
        </div>
      </div>
    );
  }
}
//Below is the function which maps the state values from store to props of the component
function mapStateToProps(state) {
  return {
    loggedIn: state.appVariables.loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginFun: function() {
      dispatch({
        type: "LOGGING",
        payload: true
      });
    }
  };
}

//Exporting the component so that this can be accessed outside by importing it.
//connect function binds the mapStateToProps to Login component so that values can be accessed throgh props
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
