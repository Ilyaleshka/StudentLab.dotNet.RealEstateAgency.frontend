import React from "react";
import Input from "./Common/FormInput";
import Button from "./Common/SubmitButton";
import "./Styles/RegForm.css"

class RegForm extends React.Component {

  state = 
  {
    Name: "",
    LastName: "",
    Email: "",
    Password: ""
  };

  submitHandler = (evt) => {
    evt.preventDefault();

    //ASYNC REGISTRATION HANDLER
    this.props.handlerFromParent( this.state.Name, this.state.LastName, this.state.Email, this.state.Password);

    this.setState( {
      Name: "",
      LastName: "",
      Email: "",
      Password: ""
    });
  }

  // Not a big thing but it's better to use full words like  handleFirstNameChange
  handleFnameChange = (event) => { this.setState({ Name: event.target.value }); };
  handleLnameChange = (event) => { this.setState({ LastName: event.target.value }); };
  handleEmailChange = (event) => { this.setState({ Email: event.target.value }); };
  handlePasswordChange = (event) => {this.setState({Password: event.target.value});};

  render(){
    return ( 
      <form className="RegForm" onSubmit={this.submitHandler}>
        <Input type="text" placeholder="First Name" value={this.state.Name} onChange={this.handleFnameChange}/>
        <Input type="text" placeholder="Last Name" value={this.state.LastName} onChange={this.handleLnameChange}/>
        <Input type="text" placeholder="Email" value={this.state.Email} onChange={this.handleEmailChange}/>
        <Input type="password" placeholder="Password" value={this.state.Password} onChange={this.handlePasswordChange}/>
        <Button value="Register"/>
      </form>
    )
  };

};

export default RegForm;

//public Int32 UserId { get; set; }
//public String Name { get; set; }
//public String LastName { get; set; }
//public String Email { get; set; }
//public String Password { get; set; }