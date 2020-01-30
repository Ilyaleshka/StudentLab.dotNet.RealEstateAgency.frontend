import React from "react";
import "../Styles/Button.css"

class Button extends React.Component {

  render(){


    return ( 
        <button type="button"  className="Button" onClick={this.props.onClick}>
                    {this.props.value}
        </button>
    )
  };
};

export default Button;