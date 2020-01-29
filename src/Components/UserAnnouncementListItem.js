import React from "react";
import InfoField from "./Common/InfoField";
import LocationPicker from "./Common/LocationPicker";
import "./Styles/RentalAnnouncementListItem.css"
import Button from "./Common/Button";

class RentalAnnouncementListItem extends React.Component {

    completeHandler = () =>{
        this.props.completeHandler(this.props.model.Id);
        this.props.onUpdate();
    }

    rejectHandler = () =>{
        this.props.rejectHandler(this.props.model.Id);
        this.props.onUpdate();
    }

    acceptHandler = () =>{
        this.props.acceptHandler(this.props.model.Id);
        this.props.onUpdate();
    }

    deleteHandler = () =>{
       //TODO
       this.props.deleteHandler(this.props.model.Id);
       this.props.onUpdate();
       console.log("deleted");
    }

    moreInfoHandler = () =>{
       //TODO
       console.log("more info");
    }

    render(){

        if(!this.props.model)
            return null;

        var buttons;
        if(this.props.model.Reservation)
        {
            if(this.props.model.Reservation.IsActive)
                buttons = <Button value="Complete" onClick={this.completeHandler}/>;
            if(!this.props.model.Reservation.IsConfirmed)
                buttons = 
                <React.Fragment> 
                                <Button value="Reject" onClick={this.rejectHandler}/>
                                <Button value="Accept" onClick={this.acceptHandler}/>
                </React.Fragment>;         
        }

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
                <Button value="More" onClick={this.moreInfoHandler}/>
                <Button value="Delete" onClick={this.deleteHandler}/>
                {buttons}
            </div>
        )
    };
}

export default   RentalAnnouncementListItem;