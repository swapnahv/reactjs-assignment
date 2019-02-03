/*
This is the footer component which is common across the application.
onclick of footer text, user will navigate to www.google.com.
*/

import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
    this.footerNavigation = this.footerNavigation.bind(this);
  }
  footerNavigation() {
    window.location.href = "http://www.google.com";
  }
  render() {
    return (
      <div>
        <h2 onClick={this.footerNavigation}>Services.History.Contact</h2>
      </div>
    );
  }
}

export default Footer;
