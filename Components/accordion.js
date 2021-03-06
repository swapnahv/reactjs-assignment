import React from 'react';
import {Button, Panel} from 'react-bootstrap';

class Accordion extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
	  const prodLogo = this.props.productDetails.prodImg;
    return (
      <div>
        <Button className = "w-100P" onClick={() => this.setState({ open: !this.state.open })}>
          Product Name<span className="glyphicon glyphicon-menu-down pull-right"></span>
        </Button>
        <br />
        <Panel id="collapsible-panel" expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
              <div className = "row">
				<div className = "col-md-8 row">
					<div className = "col-md-12 row">
						<div className = "col-md-7">
							<label>Product Code:</label>
						</div>
						<div className = "col-md-5">
							{this.props.productDetails.prodCode}
						</div>
					</div>
					<div className = "col-md-12 row">
						<div className = "col-md-7">
							<label>Product No:</label>
						</div>
						<div className = "col-md-5">
							{this.props.productDetails.prodNo}
						</div>
					</div>
					<div className = "col-md-12 row">
						<div className = "col-md-7">
							<label>Expiry date:</label>
						</div>
						<div className = "col-md-5">
							{this.props.productDetails.expiryDate}
						</div>
					</div>
					<div className = "col-md-12 row">
						<div className = "col-md-7">
							<label>Manufacturer:</label>
						</div>
						<div className = "col-md-5">
							{this.props.productDetails.manufacturer}
						</div>
					</div>
				</div>
				<div className = "col-md-4">
					<img src={prodLogo} className="prod-img-size"/>
				</div>
			  </div>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        
      </div>
    );
  }
}

export default Accordion;