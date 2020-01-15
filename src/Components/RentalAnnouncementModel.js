import React from "react";
import Input from "./Common/ModelInput";
import "./Styles/RentalAnnouncementModel.css"
import ModelTextArea from "./Common/ModelTextArea";
import CustomMap from "./Common/CustomMap";
import LocationPicker from "./Common/LocationPicker";
import MultipleImageUploadComponent from "./Common/ImageLoader";
import Button from "./Common/Button";

class RentalAnnouncementModel extends React.Component {

    constructor(props) {
        super();

        if(props.create == false)
            this.state = props.model;
        else
            this.state = 
            {
                Title: "",
                Description: "",
                Area: 0,
                Address: "",
                Cost: 0,
                Location: []
            };

        this.createHandleChangeFunction = this.createHandleChangeFunction.bind(this);
        this.locationHandleChangeFunction=  this.locationHandleChangeFunction.bind(this);
    };

    createHandleChangeFunction(target)
    {
        return (event) =>
        {
            //console.log(event.target.value);
            //console.log( this);
            this.setState({[target]: event.target.value });
        }
    }

    locationHandleChangeFunction(location)
    {
        //console.log(event.target.value);
        //console.log( this);
        this.setState({ Location: location });
    }

    
    handleChange(event) {
        this.setState(
            {
                Title: "",
                Description: "",
                Area: 0,
                Address: "",
                Cost: 0,
                Location: ""
            }
        );
    }

    
    submitHandler(evt) {
    evt.preventDefault();

    this.props.handlerFromParent(this.state.form.emailInput,this.state.form.passwordInput);

    this.setState({
        form:{emailInput: "",passwordInput: ""}
    });
    }


    render(){

        return ( 
        <React.Fragment>
            <h1 className="RentalAnnouncementModel">RENTAL ANNOUNCEMENT</h1>
            <form className="RentalAnnouncementModel">
                <div>
                    <Input label="Title" type="text" placeholder="Title" value={this.state.Title} onChange={this.createHandleChangeFunction("Title")}/>
                    <Input label="Area" type="number" placeholder="Area" value={this.state.Area} onChange={this.createHandleChangeFunction("Area")}/>
                    <Input label="Address" type="text" placeholder="Address" value={this.state.Address} onChange={this.createHandleChangeFunction("Address")}/>
                    <Input label="Cost ($)" type="number" placeholder="Cost" value={this.state.Cost} onChange={this.createHandleChangeFunction("Cost")}/>
                </div>
                <div>
                    <LocationPicker value={this.state.Location} onChange={this.locationHandleChangeFunction}/>
                </div>
                <ModelTextArea label="Description" type="text" placeholder="Description" value={this.state.Description} onChange={this.createHandleChangeFunction("Description")}/>
                <MultipleImageUploadComponent/>
                <Button value="Create"/>
            </form>
        </React.Fragment>
        )
    };
}

           //<CustomMap/>
export default  RentalAnnouncementModel
;

/*
        public String Title { get; set; }
        public String Description { get; set; }
        public Int32 Area { get; set; }
        public String Address { get; set; }
        public Int32 Cost { get; set; }
        public String Location { get; set; }
        public Int32 UserId { get; set; }
*/ 