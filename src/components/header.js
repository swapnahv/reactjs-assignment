import React from "react";
import LogoutModal from "../components/modalWindow";
import Logo from "../loGO.PNG";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currentHour: new Date().getHours(),
      currentMin: new Date().getMinutes()
    };
  }
  render() {
    return (
      <div className="col-md-12 bg-light-blue header">
        <div className="mt-20px">
          <div className="col-md-6">
            <img src={Logo} alt="logo" className="logo-size" />
          </div>
          <div className="col-md-5">
            {this.props.loggedInProps ? (
              <LogoutModal logOutProps={this.logOut} />
            ) : null}
          </div>
          <div className="col-md-1">
            {this.props.loggedInProps ? (
              <h3>
                {this.state.currentHour} : {this.state.currentMin}
              </h3>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
