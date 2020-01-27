import React from "react";
import InfoField from "./Common/InfoField";

class UserInfo extends React.Component {
  render(){

    return ( 
    <div className="UserInfo">
        <InfoField label="First name" value= {this.props.Name}/>
        <InfoField label="Last name" value= {this.props.LastName}/>
        <InfoField label="Email" value= {this.props.Email}/>
    </div>
    )
  };
}

export default  UserInfo;
