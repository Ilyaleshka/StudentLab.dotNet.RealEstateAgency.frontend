import React from "react";
import Header from "../Header";
import AuthFormContainer from "../../Containers/AuthFormContainer";

class LoginPage extends React.Component {

  render(){
    return(
        <React.Fragment>
            <Header isLoggedIn="" />
            <AuthFormContainer/>
        </React.Fragment>
    );
  }
}

export default LoginPage;