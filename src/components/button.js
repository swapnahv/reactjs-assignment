import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        disabled={this.props.disabledProps}
        className="btn btn-primary"
        onClick={this.props.handleSubmitProps}>
        {this.props.btnValue}
      </button>
    );
  }
}

export default Button;
