import React from "react";
import {Link} from 'react-router-dom';
import Input from "./Common/FormInput";
import Button from "./Common/Button";
import "./Styles/RegForm.css"

class RegForm extends React.Component {

  constructor() {
    super();
    this.handleFnameChange = this.handleFnameChange.bind(this);
    this.handleLnameChange = this.handleLnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      form:{ fnameInput: "", lnameInput: "", emailInput: "", passwordInput: ""}
    };
  }


//public Int32 UserId { get; set; }
//public String Name { get; set; }
//public String LastName { get; set; }
//public String Email { get; set; }
//public String Password { get; set; }
  submitHandler(evt) {
    evt.preventDefault();

    this.props.handlerFromParent(this.state.form.fnameInput,this.state.form.lnameInput,this.state.form.emailInput,this.state.form.passwordInput);

    this.setState({
      form:{fnameInput: "",lnameInput:"",emailInput: "",passwordInput: ""}
    });
  }


  handleFnameChange(event) {
    this.setState({
      form:{fnameInput: event.target.value}
    });
  }

  handleLnameChange(event) {
    this.setState({
      form:{lnameInput: event.target.value}
    });
  }

  handleEmailChange(event) {
    this.setState({
      form:{emailInput: event.target.value}
    });
  }

  handlePasswordChange(event) {
    this.setState({
      form:{passwordInput: event.target.value}
    });
  }

  render(){
    return ( 
      <form className="RegForm" onSubmit={this.submitHandler}>
        <Input type="text" placeholder="First Name" value={this.state.form.fnameInput} onChange={this.handleFnameChange}/>
        <Input type="text" placeholder="Last Name" value={this.state.form.lnameInput} onChange={this.handleLnameChange}/>
        <Input type="text" placeholder="Email" value={this.state.form.emailInput} onChange={this.handleEmailChange}/>
        <Input type="password" placeholder="Password" value={this.state.form.passwordInput} onChange={this.handlePasswordChange}/>
        <Button value="Register"/>
      </form>
    )
  };

  /*render(){
    return ( 
    <div>
      <form onSubmit={this.submitHandler}>
        <input  type="text"
                name=""
                placeholder="First Name"
                value={this.state.form.fnameInput}
                onChange={this.handleFnameChange}/><br/>
        <input  type="text" 
                name="" 
                placeholder="Last Name"
                value={this.state.form.lnameInput}
                onChange={this.handleLnameChange}/><br/>
        <input  type="text" name="" 
                placeholder="Email"
                value={this.state.form.emailInput}
                onChange={this.handleEmailChange}/><br/>
        <input  type="password" name="" 
                placeholder="Password"
                value={this.state.form.passwordInput}
                onChange={this.handlePasswordChange}/><br/>
        <input type="submit"/>
      </form>
      <Link to="/reg">I dont have an account</Link>
    </div>
    )
  };*/
};

export default RegForm;



//public Int32 UserId { get; set; }
//public String Name { get; set; }
//public String LastName { get; set; }
//public String Email { get; set; }
//public String Password { get; set; }