import React from "react";
import Header from "../Header";
//import RentalAnnouncementModel from "../RentalAnnouncementModel";
import RentalAnnouncementModel from "../../Containers/AnnouncementItemContainer";

class AnnouncementPage extends React.Component {

  render(){

    let userModel =     
    {    
        Title : "Title Title Title Title Title TitleTitle",
        Description : "Simple  longlonglonglonglonglong longlonglonglonglonglong longlonglonglonglonglong longlonglonglonglonglong longlonglonglonglonglong longlonglonglong ",
        Area : 228,
        Address : "Address Address Address Address Address Address",
        Cost: 1000,
        Location : "[53.874761669583464, 27.557525634765586]",
        Images : "132435543345"
    };

    return(
        <React.Fragment>
            <Header isLoggedIn="false" />
            <RentalAnnouncementModel create={this.props.create} model={userModel}/>
        </React.Fragment>
    );
  }
}

export default AnnouncementPage;