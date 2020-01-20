import React from "react";
import RentalRequest from './RentalRequestListItem'
import './Styles/RequestList.css';

class RentalRequestList extends React.Component {

  render(){
    return ( 
    <div className="RequestList">
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
