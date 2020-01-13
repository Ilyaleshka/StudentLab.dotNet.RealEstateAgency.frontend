import React from "react";
import "../Styles/Input.css"

class Input extends React.Component {

  constructor() {
    super();
  }

  render(){
    return ( 
        <input  className="Input"
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.onChange}/>
    )
  };
};

export default Input;