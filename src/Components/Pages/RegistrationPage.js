import React from "react";
import Header from "../Header";
import RegistrationFormContainer from "../../Containers/RegistrationFormContainer";

class RegistrationPage extends React.Component {

  render(){
    return(
        <React.Fragment>
            <Header isLoggedIn="" />
            <RegistrationFormContainer/>
        </React.Fragment>
    );
  }
}

export default RegistrationPage;