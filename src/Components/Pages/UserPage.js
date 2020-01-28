import React from "react";
import Header from "../../Containers/HeaderContainer";
import UserInfo from "../UserInfo";
import UserContentContainer from "../../Containers/UserContentContainer";

class UserPage extends React.Component {

  render(){
    return(
        <React.Fragment>
            <Header />
            <UserInfo {...this.props.info} />
            <UserContentContainer />
        </React.Fragment>
    );
  }
}

export default UserPage;