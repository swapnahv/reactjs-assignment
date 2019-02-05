import React from "react";
import LogoutModal from "../components/modalWindow";
import Logo from "../loGO.PNG";

const Header = function(props) {
  
    let currentHour= new Date().getHours();
    let currentMin= new Date().getMinutes();
   
    return (
      <div className="col-md-12 bg-light-blue header" data-test="headerComponent">
        <div className="mt-20px">
          <div className="col-md-6">
            <img src={Logo} alt="logo" className="logo-size" />
          </div>
          <div className="col-md-5">
            {props.loggedInProps ? (
              <LogoutModal/>
            ) : null}
          </div>
          <div className="col-md-1">
            {props.loggedInProps ? (
              <h3>
                {currentHour} : {currentMin}
              </h3>
            ) : null}
          </div>
        </div>
      </div>
    );
}

export default Header;
