import React from "react";
import "../Styles/ModelInput.css"

class ModelInput extends React.Component {

  render(){
    let label = this.props.label ? this.props.label : this.props.placeholder;
    return ( 
      <div className="ModelInput">
        <label htmlFor="Input_input" >{label}</label>        
        <input  id="Input_input"
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.onChange}/>  
      </div>
    )
  };
};

export default ModelInput;