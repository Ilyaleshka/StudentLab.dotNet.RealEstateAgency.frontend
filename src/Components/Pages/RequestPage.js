import React from "react";
import Header from "../../Containers/HeaderContainer";
import RentalRequestItemContainer from "../../Containers/RentalRequestItemContainer";

class RequestPage extends React.Component {

  render(){
    return(
        <React.Fragment>
            <Header/>
            <RentalRequestItemContainer/>
        </React.Fragment>
    );
  }
}

export default RequestPage;