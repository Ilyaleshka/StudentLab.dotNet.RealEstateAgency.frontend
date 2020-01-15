import React from "react";
import {Link} from 'react-router-dom';
import Input from "./Common/ModelInput";
import ModelTextArea from "./Common/ModelTextArea";
import Button from "./Common/Button";
import './Styles/RentalRequestModel.css'

class RentalRequestModel extends React.Component {

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
          MaxPrice: 0,
          Location: []
      };

      this.createHandleChangeFunction = this.createHandleChangeFunction.bind(this);
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


  render(){

    return ( 
    <React.Fragment>
        <h1 className="RentalRequestModel">RENTAL REQUEST</h1>
        <form className="RentalRequestModel">
            <Input label="Title" type="text" placeholder="Title" value={this.state.Title} onChange={this.createHandleChangeFunction("Title")}/>
            <Input label="Area" type="number" placeholder="Area" value={this.state.Area} onChange={this.createHandleChangeFunction("Area")}/>
            <Input label="Preffered address" type="text" placeholder="Preffered address" value={this.state.PrefferedAddress} onChange={this.createHandleChangeFunction("PrefferedAddress")}/>
            <Input label="MaxPrice ($)" type="number" placeholder="Max price " value={this.state.MaxPrice} onChange={this.createHandleChangeFunction("MaxPrice")}/>
            <ModelTextArea label="Description" type="text" placeholder="Description" value={this.state.Description} onChange={this.createHandleChangeFunction("Description")}/>
            <Button value="Create"/>
        </form>
    </React.Fragment>
    )
  };

}


export default  RentalRequestModel;

/*
        public int Id { get; set; }

        public String Title { get; set; }
        public String Description { get; set; }
        public Int32 Area { get; set; }
        public String PrefferedAddress { get; set; }
        public Int32 MaxPrice { get; set; }

        public String UserId { get; set; }
*/ 