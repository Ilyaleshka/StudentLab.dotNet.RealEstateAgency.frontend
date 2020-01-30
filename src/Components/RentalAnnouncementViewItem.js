import React from "react";
import Input from "./Common/ModelInput";
import "./Styles/AnnouncementViewItem.css"
import ModelTextArea from "./Common/ModelTextArea";
import LocationPicker from "./Common/LocationPicker";
import Button from "./Common/Button";
import ImageViewer from "./Common/ImageViewer";

class RentalAnnouncementViewItem extends React.Component {

    state = 
    {
        Title: "",
        Description: "",
        Area: 0,
        Address: "",
        Cost: 0,
        Location: "[]",
        Images: [],
    };

    componentDidUpdate = (prevProps) =>
    {
        if(this.props.model != prevProps.model)
        this.setState({...this.props.model});
    }

    reservationHandler = () => { 
        this.props.reserveAnnouncement(this.props.model.Id);
        this.props.getInfo(this.props.match.params.id);
    };

    completeHandler = () => { 
        this.props.completeReservation(this.props.model.Id);
        this.props.getInfo(this.props.match.params.id);
    };

    rejectHandler = () => { 
        this.props.rejectReservation(this.props.model.Id);
        this.props.getInfo(this.props.match.params.id);
    };

    acceptHandler = () => { 
        this.props.acceptReservation(this.props.model.Id);
        this.props.getInfo(this.props.match.params.id);
    };
    
    deleteHandler = () => {
        this.props.deleteAnnouncement(this.props.model.Id);
        this.props.getInfo(this.props.match.params.id);
    };

    componentDidMount = () =>
    {
        console.log(this.props.match.params.id);
        this.props.getInfo(this.props.match.params.id);
    }

    render(){

        var buttons = [];
        if((this.props.isLoggedIn) && this.props.model && (this.props.userInfo.Id == this.props.model.UserId))
        {
            buttons.push(<Button key="Delete" value="Delete" onClick={this.deleteHandler}/>);

            if(this.props.model.Reservation && this.props.model.Reservation.IsActive)
                buttons.push(<Button key="Complete"  value="Complete" onClick={this.completeHandler}/>);

            if(this.props.model.Reservation && !this.props.model.Reservation.IsConfirmed)
            {
                buttons.push(<Button key="Reject" value="Reject" onClick={this.rejectHandler}/>);
                buttons.push( <Button key="Accept" value="Accept" onClick={this.acceptHandler}/>);
            }
        }

        if((this.props.isLoggedIn) && this.props.model && !this.props.model.Reservation && (this.props.userInfo.Id !== this.props.model.UserId))
        {
            buttons.push(<Button key="Reserve" value="Reserve" onClick={this.reservationHandler}/>);
        }

        if(!this.props.model)
            return <div>Loading</div>

        return ( 
        <React.Fragment>
            <h1 className="RentalAnnouncementViewItem">RENTAL ANNOUNCEMENT</h1>
            <form className="RentalAnnouncementViewItem" onSubmit={this.submitHandler}>
                <div className="info-fields">
                    <Input readonly label="Title" type="text" placeholder="Title" value={this.state.Title}/>
                    <Input readonly label="Area" type="number" placeholder="Area" value={this.state.Area}/>
                    <Input readonly label="Address" type="text" placeholder="Address" value={this.state.Address}/>
                    <Input readonly label="Cost ($)" type="number" placeholder="Cost" value={this.state.Cost}/>
                </div>
                <div className="map">
                    <LocationPicker value={this.state.Location}/>
                </div>
                <div className="description">
                    <ModelTextArea readonly label="Description" type="text" placeholder="Description" value={ this.state.Description }/>
                </div>
                <div className="images">
                    <ImageViewer images={this.state.Images}/>
                </div>
                <div className="buttons">
                    {buttons}
                </div>
            </form>
        </React.Fragment>
        )
    };
}
//<ImageViewer images={this.state.Images}/>
export default  RentalAnnouncementViewItem;

/*
        public String Title { get; set; }
        public String Description { get; set; }
        public Int32 Area { get; set; }
        public String Address { get; set; }
        public Int32 Cost { get; set; }
        public String Location { get; set; }
*/ 