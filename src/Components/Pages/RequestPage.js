import React from "react";
import Header from "../Header";
import RentalRequestItemContainer from "../../Containers/RentalRequestItemContainer";

class RequestPage extends React.Component {

  render(){

    let userModel =     
    {    
        Title : "Title Title Title Title Title TitleTitle",
        Description : "Simple  longlonglonglonglonglong longlonglonglonglonglong longlonglonglonglonglong longlonglonglonglonglong longlonglonglonglonglong longlonglonglong ",
        Area : 228,
        PrefferedAddress : "Address Address Address Address Address Address",
        MaxPrice: 1000,
        Location : [10,10],
        Images : "132435543345"
    };


    return(
        <React.Fragment>
            <Header isLoggedIn="false" />
            <RentalRequestItemContainer create={this.props.create} model={userModel}/>
        </React.Fragment>
    );
  }
}

export default RequestPage;