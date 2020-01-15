import React from "react";
import {Link} from 'react-router-dom';

class RentalAnnouncementItem
 extends React.Component {

  // it does nothing, can be removed
  constructor() {
    super();
    };

  render(){
    return ( 
    <div>
      <p>Title: {this.props.title}</p>
      <br/>
      <p>Description: {this.props.description}</p>
      <br/>
      <p>Area: {this.props.area}</p>
      <br/>
      <p>Address: {this.props.address}</p>
      <br/>
      <p>Cost: {this.props.cost}</p>
      <br/>
      <p>Location: {this.props.location}</p>
      <br/>
    <p>User</p> 
    </div>
    )
  };
}


export default  RentalAnnouncementItem
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