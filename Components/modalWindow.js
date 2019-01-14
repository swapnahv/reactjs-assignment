import React from 'react';
import {Button, Modal} from 'react-bootstrap';

class LogoutModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

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
  
  render() {
	return(
		<div>

        <Button bsStyle="primary" bsSize="large" className = "pull-right" onClick={this.handleShow}>
          Log Out
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          
          <Modal.Body>
            <h2> Are You sure you want to end this session</h2>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>No</Button> <Button bsStyle="primary"  onClick={this.logOutProps}>Yes</Button>
          </Modal.Footer>
        </Modal>
      </div>
	)
  }
}

export default LogoutModal;