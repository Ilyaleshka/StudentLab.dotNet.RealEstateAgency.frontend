import React from "react";
import "../Styles/ModelTextArea.css"

class ModelTextArea extends React.Component {

  render(){
    let label = this.props.label ? this.props.label : this.props.placeholder;
    return ( 
      <div className="ModelTextArea">
        <label>{label}</label>        
        <textarea 
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.onChange}
                readOnly={this.props.readonly}/>  
      </div>
    )
  };
};

export default ModelTextArea;