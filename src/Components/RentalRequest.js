import React from "react";
import {Link} from 'react-router-dom';

class RentalRequest extends React.Component {

  constructor() {
    super();
    };

  render(){
    return ( 
    <li className="RentalRequest">
        <p>Title: {this.props.model.Title}</p>
        <hr/>
        <p>Description: {this.props.model.Description}</p>
        <hr/>
        <p>area: {this.props.model.Area}</p>
        <hr/>
        <p>Preffered address: {this.props.model.PrefferedAddress}</p>
        <hr/>
        <p>Max price: {this.props.model.MaxPrice}</p>
        <hr/>
        <p>User</p>
    </li>
    )
  };
}


export default  RentalRequest;

/*
        public String Title { get; set; }
        public String Description { get; set; }
        public Int32 Area { get; set; }
        public String Address { get; set; }
        public Int32 Cost { get; set; }
        public String Location { get; set; }
        public Int32 UserId { get; set; }
*/ 