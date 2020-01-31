import React from "react";
import Header from "../../Containers/HeaderContainer";
import RegistrationFormContainer from "../../Containers/RegistrationFormContainer";

class RegistrationPage extends React.Component {

  render(){
    return(
        <React.Fragment>
            <RegistrationFormContainer/>
        </React.Fragment>
    );
  }
}

export default RegistrationPage;