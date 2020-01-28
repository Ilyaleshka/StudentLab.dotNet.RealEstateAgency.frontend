import React from "react";
import './Styles/RequestList.css';
import './Styles/Paginate.css';
import RentalRequest from './RentalRequestListItem'

class UserRequestList extends React.Component {

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

export default  UserRequestList;
