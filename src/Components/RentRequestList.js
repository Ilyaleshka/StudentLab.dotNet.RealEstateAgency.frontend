import React from "react";
import RentalRequest from './RentalRequest'

class RentalRequestList extends React.Component {

  constructor() {
    super();
    };

  render(){
    return ( 
    <div>
        {this.props.rentRequests.map((rentReq) =>  (<RentalRequest key={rentReq.Id} model={rentReq}/>))}
    </div>
    )
  };

  componentDidMount()
  {
      this.props.fetchRentalRequests();
  }
}


export default  RentalRequestList;
