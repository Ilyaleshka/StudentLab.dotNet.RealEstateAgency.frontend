import React from "react";
import Header from "../Header";
import AnnouncementsListContainer from "../../Containers/AnnouncementsListContainer";
import RentRequestListContainer from "../../Containers/RentRequestListContainer";

class AdvertismentsPage extends React.Component {

  render(){
    return(
      <React.Fragment>
       <Header isLoggedIn="false"/>
       <AnnouncementsListContainer/>
       <RentRequestListContainer/>
      </React.Fragment>
    );
  }
}

export default AdvertismentsPage;