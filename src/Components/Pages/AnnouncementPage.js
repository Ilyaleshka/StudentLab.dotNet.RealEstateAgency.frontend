import React from "react";
import Header from "../Header";
import RentalAnnouncementModel from "../RentalAnnouncementModel";

class AnnouncementPage extends React.Component {

  constructor() {
    super();
  }


  render(){

    let userModel =     
    {    
        title : "Title Title Title Title Title TitleTitle",
        description : "Simple  longlonglonglonglonglong longlonglonglonglonglong longlonglonglonglonglong longlonglonglonglonglong longlonglonglonglonglong longlonglonglong ",
        area : 228,
        address : "Address Address Address Address Address Address",
        cost: 1000,
        location : "Location location location location",
        userId : "132435543345"
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