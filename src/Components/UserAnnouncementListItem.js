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
                <Button value="Reject" onClick={this.props.onClick}/>
                <Button value="Accept" onClick={this.props.onClick}/>
                <Button value="Delete" onClick={this.props.onClick}/>
            </div>
        )
    };
}
// <ImageViewer images={this.props.model.Images}/>

export default   RentalAnnouncementListItem;
