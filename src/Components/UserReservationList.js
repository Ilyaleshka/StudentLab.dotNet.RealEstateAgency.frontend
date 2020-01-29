import React from "react";
import './Styles/RequestList.css';
import './Styles/Paginate.css';
import RentalRequest from './RentalAnnouncementListItem'

class ReservationList extends React.Component {

  render(){
    return ( 
    <div className="RequestList">
        {this.props.reservations.map((rentReq) =>  (<RentalRequest key={rentReq.Id} model={rentReq}/>))}
    </div>
    )
  };

  componentDidMount()
  {
      this.props.fetchReservations();
  }
}

export default  ReservationList;
