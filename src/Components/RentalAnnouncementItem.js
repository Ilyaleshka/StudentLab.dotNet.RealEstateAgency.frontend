import React from "react";
import Input from "./Common/ModelInput";
import "./Styles/RentalAnnouncementItem.css"
import ModelTextArea from "./Common/ModelTextArea";
import LocationPicker from "./Common/LocationPicker";
import MultipleImageUploadComponent from "./Common/ImageLoader";
import Button from "./Common/SubmitButton";

class RentalAnnouncementModel extends React.Component {

    state = 
    {
        Title: "",
        Description: "",
        Area: 0,
        Address: "",
        Cost: 0,
        Location: "[]",
        Base64Images: [],
        FilesInfo: []
    };

    submitHandler = (evt) => {
        evt.preventDefault();

        //VALIDATION FUNCTION HERE

        ///CREATE HANDLER FROM PROPS HERE
        let images =  this.state.Base64Images.map(base64img => base64img.replace(/data:.+?,/, ""));
        this.props.createHandler(this.state.Title, this.state.Description, this.state.Area, this.state.Address, this.state.Cost, this.state.Location,images);

        this.setState({
            Title: "",
            Description: "",
            Area: 0,
            Address: "",
            Cost: 0,
            Location: "[]",
            Base64Images: [],
            FilesInfo: []
        });
    }

    titleChangeHandler = (event) => { this.setState({Title: event.target.value }); };
    areaChangeHandler = (event) => { this.setState({Area: event.target.value }); };
    addressChangeHandler = (event) => { this.setState({Address: event.target.value }); };
    priceChangeHandler = (event) => { this.setState({Cost: event.target.value }); };
    descriptionChangeHandler = (event) => { this.setState({Description: event.target.value }); };
    locationChangeHandler = (location) =>{this.setState({ Location: location });};
    imagesChangeHandler = (images, info) =>{this.setState({ Base64Images: images, FilesInfo: info });};

    render(){

        return ( 
        <React.Fragment>
            <h1 className="RentalAnnouncementModel">RENTAL ANNOUNCEMENT</h1>
            <form className="RentalAnnouncementModel" onSubmit={this.submitHandler}>
                <div>
                    <Input label="Title" type="text" placeholder="Title" value={this.state.Title} onChange={this.titleChangeHandler}/>
                    <Input label="Area" type="number" placeholder="Area" value={this.state.Area} onChange={this.areaChangeHandler }/>
                    <Input label="Address" type="text" placeholder="Address" value={this.state.Address} onChange={this.addressChangeHandler}/>
                    <Input label="Cost ($)" type="number" placeholder="Cost" value={this.state.Cost} onChange={this.priceChangeHandler}/>
                </div>
                <div>
                    <LocationPicker value={this.state.Location} onChange={this.locationChangeHandler}/>
                </div>
                <ModelTextArea label="Description" type="text" placeholder="Description" value={ this.state.Description } onChange={ this.descriptionChangeHandler }/>
                <MultipleImageUploadComponent base64Images={ this.state.Base64Images } filesInfo={ this.state.FilesInfo } onChange={ this.imagesChangeHandler }/>
                <Button value="Create"/>
            </form>
        </React.Fragment>
        )
    };
}

export default  RentalAnnouncementModel;

/*
        public String Title { get; set; }
        public String Description { get; set; }
        public Int32 Area { get; set; }
        public String Address { get; set; }
        public Int32 Cost { get; set; }
        public String Location { get; set; }
*/ 