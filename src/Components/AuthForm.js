import React from "react";
import {withRouter} from 'react-router-dom';
import Input from "./Common/FormInput";
import Button from "./Common/SubmitButton";
import './Styles/AuthForm.css';

class AuthForm extends React.Component {

  state = {
    Name: "",
    Password: ""
  };

  registrationClick = () => {
    this.props.history.push("/reg");
  } 

  submitHandler = (event) => {
    event.preventDefault();

    //AUTH HANDLER
      // Name should describe what the function does
    this.props.handlerFromParent(this.state.Name , this.state.Password);

    this.setState({ Name: "", Password: ""});
  };

  handleNameChange = (event) => { this.setState({ Name: event.target.value }); };
  handlePasswordChange = (event) => { this.setState({ Password : event.target.value }); };


  render(){
    return ( 
      <form className="AuthForm" onSubmit={this.submitHandler}>
        <Input type="text" placeholder="Name" value={ this.state.Name } onChange={ this.handleNameChange }/>
        <Input type="password" placeholder="Password" value={ this.state.Password } onChange={ this.handlePasswordChange }/>
        <Button value="LogIn"/>
        <a className="Form_Link" onClick={this.registrationClick}>I don't have an account</a>
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