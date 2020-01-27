import React from "react";
import Header from "../../Containers/HeaderContainer";
import UserInfo from "../UserInfo";

class UserPage extends React.Component {

  render(){
    return(
        <React.Fragment>
            <Header />
            <UserInfo {...this.props.info} />
        </React.Fragment>
    );
  }
}

export default UserPage;