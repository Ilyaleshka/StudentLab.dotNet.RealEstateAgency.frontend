import React from "react";
import Input from "./Common/ModelInput";
import ModelTextArea from "./Common/ModelTextArea";
import Button from "./Common/SubmitButton";
import './Styles/RentalRequestItem.css'

// 'Model' is not a good name for a component, probably something like 'Item' will look better
class RentalRequestItem extends React.Component {

  state = 
  {
      Title: "",
      Description: "",
      Area: 0,
      PrefferedAddress: "",
      MaxPrice: 0,
  };

  // In react naming convention is handleTitleChange
  titleChangeHandler = (event) => { this.setState({Title: event.target.value }); };
  areaChangeHandler = (event) => { this.setState({Area: event.target.value }); };
  addressChangeHandler = (event) => { this.setState({PrefferedAddress: event.target.value }); };
  priceChangeHandler = (event) => { this.setState({MaxPrice: event.target.value }); };
  descriptionChangeHandler = (event) => { this.setState({Description: event.target.value }); };

  submitHandler = (evt) => {
    evt.preventDefault();

    //VALIDATION FUNCTION HERE

    ///CREATE HANDLER FROM PROPS HERE
    this.props.createHandler(this.state.Title, this.state.Description, this.state.Area, this.state.PrefferedAddress, this.state.MaxPrice);

    this.setState({
      Title: "",
      Description: "",
      Area: 0,
      PrefferedAddress: "",
      MaxPrice: 0,
    });

    //this.props.history.push("/adv");
  }


  render(){

    return ( 
    <React.Fragment>
        <h1 className="RentalRequestItem">RENTAL REQUEST</h1>
        <form className="RentalRequestItem" onSubmit={this.submitHandler}>
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