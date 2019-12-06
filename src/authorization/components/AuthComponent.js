import React from "react";
import {Link} from 'react-router-dom';

class AuthForm extends React.Component {

  constructor() {
    super();
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      form:{emailInput: "", passwordInput: ""}
    };
  }


  submitHandler(evt) {
    evt.preventDefault();

    this.props.handlerFromParent({email: this.state.form.emailInput, password: this.state.form.passwordInput});
    
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
    <div>
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
      </form>
      <Link to="/auth">I already have an account</Link>
    </div>
    )
  };
};

export default AuthForm;


//public Int32 UserId { get; set; }
//public String Name { get; set; }
//public String LastName { get; set; }
//public String Email { get; set; }
//public String Password { get; set; }