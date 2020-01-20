import React from "react";
import "../Styles/InfoField.css"

class InfoField extends React.Component {
  render(){
    return ( 
      <div className="InfoField">
        <b>{this.props.label}</b> : {this.props.value}
      </div>
    )
  };
};

export default InfoField;
