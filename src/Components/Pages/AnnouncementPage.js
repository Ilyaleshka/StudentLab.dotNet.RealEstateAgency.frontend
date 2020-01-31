import React from "react";
import Header from "../../Containers/HeaderContainer";
//import RentalAnnouncementModel from "../RentalAnnouncementModel";
import RentalAnnouncementModel from "../../Containers/AnnouncementItemContainer";

class AnnouncementPage extends React.Component {

  render(){
    return(
        <React.Fragment>
            <RentalAnnouncementModel/>
        </React.Fragment>
    );
  }
}

export default AnnouncementPage;