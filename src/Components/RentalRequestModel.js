import React from "react";
import {Link} from 'react-router-dom';
import Input from "./Common/ModelInput";
import ModelTextArea from "./Common/ModelTextArea";
import Button from "./Common/Button";
import './Styles/RentalRequestModel.css'

// 'Model' is not a good name for a component, probably something like 'Item' will look better
class RentalRequestItem extends React.Component {

  state = 
  {
      Title: "",
      Description: "",
      Area: 0,
      Address: "",
      MaxPrice: 0,
      Location: []
  };

  constructor(props) {
    super();

    if(props.create === false)
      this.state = { ...props.model };

  };

  titleChangeHandler = (event) => { this.setState({Title: event.target.value }); };
  areaChangeHandler = (event) => { this.setState({Area: event.target.value }); };
  addressChangeHandler = (event) => { this.setState({PrefferedAddress: event.target.value }); };
  priceChangeHandler = (event) => { this.setState({MaxPrice: event.target.value }); };
  descriptionChangeHandler = (event) => { this.setState({Description: event.target.value }); };

//onSubmit={this.submitHandler}

  render(){

    return ( 
    <React.Fragment>
        <h1 className="RentalRequestModel">RENTAL REQUEST</h1>
        <form className="RentalRequestModel">
            <Input label="Title" type="text" placeholder="Title" value={this.state.Title} onChange={this.titleChangeHandler }/>
            <Input label="Area" type="number" placeholder="Area" value={this.state.Area} onChange={this.areaChangeHandler }/>
            <Input label="Preffered address" type="text" placeholder="Preffered address" value={this.state.PrefferedAddress} onChange={this.addressChangeHandler }/>
            <Input label="MaxPrice ($)" type="number" placeholder="Max price " value={this.state.MaxPrice} onChange={this.priceChangeHandler}/>
            <ModelTextArea label="Description" type="text" placeholder="Description" value={this.state.Description} onChange={this.descriptionChangeHandler}/>
            <Button value="Create"/>
        </form>
    </React.Fragment>
    )
  };

}


export default  RentalRequestItem;

/*
        public String Title { get; set; }
        public String Description { get; set; }
        public Int32 Area { get; set; }
        public String PrefferedAddress { get; set; }
        public Int32 MaxPrice { get; set; }
*/ 