/*
This container is responsible for displaying the available details of user and the product details.
@axios - this is used for fetching data from the JSON file
*/
import React from "react";
import axios from "axios";
import Button from "../components/button";
import Accordion from "../components/accordion";
import Header from "../components/header";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.goToEditProfilePage = this.goToEditProfilePage.bind(this);
  }
  goToEditProfilePage() {
    //navigation to edit profile page
    this.props.history.push("/editProfile");
  }
  componentWillMount() {
    axios
      .get("data.json")
      .then(res => {
        //on successfuly fetching data from JSON file
        this.props.actions.GetUserDetailsFun(res.data.userDetails);
        this.props.actions.GetProductDetailsFun(res.data.productDetails);
      })
      .catch(function(error) {
        //Handle error
        console.log(error);
      });
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
      <div>
        <Header loggedInProps={this.props.loggedIn} />
        <div className="col-md-offset-3 col-md-6 bg-white content">
          <div className="col-md-12 text-align-center">
            <h3>Dashboard</h3>
          </div>
          <div className="col-md-12">
            <div className="col-md-6">
              <h4>User details</h4>
              <div className="col-md-12">
                <div className="col-md-5">
                  <label>Name:</label>
                </div>
                <div className="col-md-6">
                  <div>{name}</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="col-md-5">
                  <label>Age:</label>
                </div>
                <div className="col-md-6">
                  <div>{Age}</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="col-md-5">
                  <label>Address:</label>
                </div>
                <div className="col-md-6">
                  <div>{Address1}</div>
                  <div>{Address2}</div>
                  <div>{Address3}</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="col-md-5">
                  <label>Contact:</label>
                </div>
                <div className="col-md-6">
                  <div>{Contact}</div>
                </div>
              </div>
            </div>
            <div className="col-md-offset-3 col-md-3">
              <Button
                handleSubmitProps={this.goToEditProfilePage}
                btnValue="Edit Profile"
              />
            </div>
          </div>
          <div className="col-md-offset-1 col-md-9 mt-20px">
            <Accordion productDetails={this.props.productDetails} />
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
    userDetails: state.details.userDetails,
    productDetails: state.details.productDetails
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      GetUserDetailsFun: function(userDetails) {
        dispatch({
          type: "GET_USER_DETAILS",
          payload: userDetails
        });
      },
      GetProductDetailsFun: function(productDetails) {
        dispatch({
          type: "GET_PRODUCT_DETAILS",
          payload: productDetails
        });
      }
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
