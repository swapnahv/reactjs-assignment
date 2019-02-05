import React from "react";
import Button from "../components/button";
import Header from "../components/header";
import { connect } from "react-redux";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      fieldDisable: true
    };
    this.enableFields = this.enableFields.bind(this);
  }

  enableFields() {
    this.setState({ fieldDisable: false });
  }

  render() {
    let {
      name,
      Age,
      Address1,
      Address2,
      Address3,
      Contact
    } = this.props.userDetails;
    return (
      <div data-test="profileComponent">
        <Header loggedInProps={this.props.loggedIn} />
        <div className="col-md-offset-3 col-md-6 bg-white content">
          <div className="col-md-12">
            <div className="text-align-center">
              <h3>User profile</h3>
            </div>
          </div>
          <div className="col-md-12 mt-20px">
            <div className="col-md-3 pull-right">
              <Button handleSubmitProps={this.enableFields} btnValue="Edit" />
            </div>
            <div className="col-md-9">
              <div className="col-md-12">
                <div className="col-md-3">
                  <label>Name:</label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    value={name}
                    disabled={this.state.fieldDisable}
                  />
                </div>
              </div>
              <div className="col-md-12 mt-20px">
                <div className="col-md-3">
                  <label>Age:</label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    value={Age}
                    disabled={this.state.fieldDisable}
                  />
                </div>
              </div>
              <div className="col-md-12 mt-20px">
                <div className="col-md-3">
                  <label>Contact:</label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    value={Contact}
                    disabled={this.state.fieldDisable}
                  />
                </div>
              </div>
              <div className="col-md-12 mt-20px">
                <div className="col-md-3">
                  <label>Address:</label>
                </div>
                <div className="col-md-6">
                  <div>
                    <input
                      type="text"
                      value={Address1}
                      disabled={this.state.fieldDisable}
                    />
                  </div>
                  <div className="mt-20px">
                    <input
                      type="text"
                      placeholder="Address field"
                      value={Address2}
                      disabled={this.state.fieldDisable}
                    />
                  </div>
                  <div className="mt-20px">
                    <input
                      type="text"
                      placeholder="Address field"
                      value={Address3}
                      disabled={this.state.fieldDisable}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-offset-5 col-md-2 mt-20px">
              {this.state.fieldDisable ? null : <Button btnValue="Update" />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Below is the function which maps the state values from store to props of the component
function mapStateToProps(state) {
  return {
    loggedIn: state.appVariables.loggedIn,
    userDetails: state.details.userDetails
  };
}

export default connect(mapStateToProps)(Profile);
