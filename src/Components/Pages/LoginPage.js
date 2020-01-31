import React from "react";
import Header from "../../Containers/HeaderContainer";
import AuthFormContainer from "../../Containers/AuthFormContainer";

class LoginPage extends React.Component {

  render(){
    return(
        <React.Fragment>
            <AuthFormContainer/>
        </React.Fragment>
    );
  }
}

export default LoginPage;