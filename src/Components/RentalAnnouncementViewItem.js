import React from "react";
import Input from "./Common/ModelInput";
import "./Styles/RentalAnnouncementItem.css"
import ModelTextArea from "./Common/ModelTextArea";
import LocationPicker from "./Common/LocationPicker";
import Button from "./Common/SubmitButton";
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

    constructor(props) {
        super();
        //var anouncementId = parseInt(props.match.params.number, 10)
        this.state = {...props.model};
    };

    reservationHandler = () => {};
    rejectReservationHandler = () => {};
    acceptReservationHandler  = () => {};
    deleteHandler  = () => {};

    componentDidMount = () =>
    {

    }

    render(){

        return ( 
        <React.Fragment>
            <h1 className="RentalAnnouncementModel">RENTAL ANNOUNCEMENT</h1>
            <form className="RentalAnnouncementModel" onSubmit={this.submitHandler}>
                <div>
                    <Input label="Title" type="text" placeholder="Title" value={this.state.Title}/>
                    <Input label="Area" type="number" placeholder="Area" value={this.state.Area}/>
                    <Input label="Address" type="text" placeholder="Address" value={this.state.Address}/>
                    <Input label="Cost ($)" type="number" placeholder="Cost" value={this.state.Cost}/>
                </div>
                <div>
                    <LocationPicker value={this.state.Location}/>
                </div>
                <ModelTextArea label="Description" type="text" placeholder="Description" value={ this.state.Description }/>
                <ImageViewer images={this.state.Images}/>
                <Button value="Delete"/>
                <Button value="Reserve"/>
                <Button value="Reject reservation"/>
                <Button value="Accept reservation"/>
            </form>
        </React.Fragment>
        )
    };
}

export default  RentalAnnouncementViewItem;

/*
        public String Title { get; set; }
        public String Description { get; set; }
        public Int32 Area { get; set; }
        public String Address { get; set; }
        public Int32 Cost { get; set; }
        public String Location { get; set; }
*/ 