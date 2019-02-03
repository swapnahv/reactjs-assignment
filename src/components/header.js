import React from "react";
import LogoutModal from "../components/modalWindow";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currentHour: new Date().getHours(),
      currentMin: new Date().getMinutes(),
      loggedIn: true
    };
    this.logOut = this.logOut.bind(this);
  }
  logOut() {
    this.props.history.push("/dashboard");
  }
  render() {
    return (
      <div className="col-md-12 mt-20px">
        <div className="col-md-6">
          <img src="" alt="image" className="logo-size" />
        </div>
        <div className="col-md-5">
          {this.state.loggedIn ? (
            <LogoutModal logOutProps={this.logOut} />
          ) : null}
        </div>
        <div className="col-md-1">
          {this.state.loggedIn ? (
            <h3>
              {this.state.currentHour} : {this.state.currentMin}
            </h3>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Header;
