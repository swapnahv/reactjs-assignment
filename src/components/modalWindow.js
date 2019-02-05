/*
This is modal window component for logging out of application.
*/

import React from 'react';
import {Button, Modal} from 'react-bootstrap';

class LogoutModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
	this.logout = this.logout.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  
  logout(){
	this.setState({ show: false });
	//Below line is for naviagting back to login page on click of 'YES' option on modal window
	window.location.href = '/';
  }
  
  render() {
	return(
		<div data-test="logoutModalComponent">	
			<Button data-test="logOutButton" bsStyle="primary" bsSize="large" className = "pull-right" onClick={this.handleShow}>
				Log Out
			</Button>

			<Modal show={this.state.show} onHide={this.handleClose}>          
				<Modal.Body>
					<h2> Are you sure you want to end this session?</h2>
				</Modal.Body>
				<Modal.Footer>
					<Button className="pull-left" onClick={this.handleClose}>No</Button> <Button className="pull-right" bsStyle="primary"  onClick={this.logout}>Yes</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
  }
}

export default LogoutModal;