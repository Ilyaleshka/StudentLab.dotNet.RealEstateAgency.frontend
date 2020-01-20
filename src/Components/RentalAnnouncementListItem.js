import React from "react";
import InfoField from "./Common/InfoField";
import LocationPicker from "./Common/LocationPicker";
import "./Styles/RentalAnnouncementListItem.css"
import Button from "./Common/Button";

class RentalAnnouncementListItem extends React.Component {
  render(){

    if(!this.props.model)
      return null;

    return ( 
    <div className="RentalAnnouncementItem">
      <div className="map">
      <LocationPicker value={this.props.model.Location}></LocationPicker>
      </div>
      <div className="info">
      <InfoField label="Title" value= {this.props.model.Title}/>
      <InfoField label="Area" value= {this.props.model.Area}/>
      <InfoField label="Address" value= {this.props.model.Address}/>
      <InfoField label="Cost" value= {this.props.model.Cost}/>
      <InfoField label="Description" value= {this.props.model.Description}/>
      </div >
      <Button value="More" onClick={this.props.onClick}/>
    </div>
    )
  };
}


export default   RentalAnnouncementListItem;

/*
        public String Title { get; set; }
        public String Description { get; set; }
        public Int32 Area { get; set; }
        public String Address { get; set; }
        public Int32 Cost { get; set; }
        public String Location { get; set; }
        public Int32 UserId { get; set; }
*/ 