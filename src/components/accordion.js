/*
This accordion component. This has a button and the panel , which toggles on click of button.
This dispalys the product details and and the product image which are passed by parent component.
*/
import React from 'react';
import {Button, Panel} from 'react-bootstrap';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
		};
		this.togglePanel = this.togglePanel.bind(this);
  }
	togglePanel(){
		this.setState({open: !this.state.open});
	}
  render() {
	  const prodLogo = this.props.productDetails.prodImg;
    return (
      <div>
        <Button className = "w-100P" onClick={this.togglePanel}>
          Product Name<span className="glyphicon glyphicon-menu-down pull-right"></span>
        </Button>
        <br />
        <Panel id="collapsible-panel" expanded={this.state.open} onToggle={()=>{}} >
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
					<img src={prodLogo} alt="productImg" className="prod-img-size"/>
				</div>
			  </div>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        
      </div>
    );
  }
}
