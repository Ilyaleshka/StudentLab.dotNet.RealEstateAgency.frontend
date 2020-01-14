import React from "react";
import {Link,withRouter} from 'react-router-dom';
import Input from "./Common/FormInput";
import Button from "./Common/Button";
import './Styles/AuthForm.css';

class AuthForm extends React.Component {

  constructor() {
    super();
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      form:{emailInput: "", passwordInput: ""}
    };

    this.RegistrationClick = this.RegistrationClick.bind(this);
  }

  RegistrationClick()
  {
    this.props.history.push("/reg");
  } 

  submitHandler(evt) {
    evt.preventDefault();

    this.props.handlerFromParent(this.state.form.emailInput,this.state.form.passwordInput);
    
    this.setState({
      form:{emailInput: "",passwordInput: ""}
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
      <form className="AuthForm" onSubmit={this.submitHandler}>
        <Input type="text" placeholder="Email" value={this.state.form.emailInput} onChange={this.handleEmailChange}/>
        <Input type="password" placeholder="Password" value={this.state.form.passwordInput} onChange={this.handlePasswordChange}/>
        <Button value="LogIn"/>
        <a className="Form_Link" onClick={this.RegistrationClick}>I don't have an account</a>
      </form>
    )
  };
};

export default withRouter(AuthForm);


//public Int32 UserId { get; set; }
//public String Name { get; set; }
//public String LastName { get; set; }
//public String Email { get; set; }
//public String Password { get; set; }


/**
 *  render(){
    return ( 
      <form onSubmit={this.submitHandler}>
        <input  type="text" name="" 
                placeholder="Email"
                value={this.state.form.emailInput}
                onChange={this.handleEmailChange}/><br/>
        <input  type="password" name="" 
                placeholder="Password"
                value={this.state.form.passwordInput}
                onChange={this.handlePasswordChange}/><br/>
        <input type="submit"/>
        <Link to="/auth">I already have an account</Link>
      </form>
    )
  };
 */