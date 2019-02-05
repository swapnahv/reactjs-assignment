/*
This is the footer component which is common across the application.
onclick of footer text, user will navigate to www.google.com.
*/
import React from 'react';

const Footer = function() {
  
  const footerNavigation = function() {
    window.location.href = "http://www.google.com";
  }
    return (
      <div data-test="footerComponent">
        <h2 onClick={footerNavigation} data-test="footerComponentText">Services.History.Contact</h2>
      </div>
    );
}

export default Footer;
