import React from "react";
import InfoField from "./Common/InfoField";
import "./Styles/RentalRequestListItem.css"

class RentalRequesListItem extends React.Component {
  render(){

    if(!this.props.model)
      return null;

    return ( 
    <div className="RentalRequestListItem">
        <InfoField label="Title" value= {this.props.model.Title}/>
        <InfoField label="Area" value= {this.props.model.Area}/>
        <InfoField label="Preffered address" value= {this.props.model.PrefferedAddress}/>
        <InfoField label="Max price" value= {this.props.model.MaxPrice}/>
        <InfoField label="Description" value= {this.props.model.Description}/>
    </div>
    )
  };
}

export default  RentalRequesListItem;
