import React from "react";

const Button = function(props){
  return (
    <button data-test = "buttonComponent"
      disabled={props.disabledProps}
      className="btn btn-primary"
      onClick={props.handleSubmitProps}>
      {props.btnValue}
    </button>
  );
}

export default Button;
