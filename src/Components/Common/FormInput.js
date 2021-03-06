import React from "react";
import "../Styles/FormInput.css"

class FormInput extends React.Component {

  render(){
    let label = this.props.label ? this.props.label : this.props.placeholder;
    return ( 
      <div className="FormInput">
        <label >{label}</label>        
        <input 
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.onChange}/>  
      </div>
    )
  };
};

export default FormInput;