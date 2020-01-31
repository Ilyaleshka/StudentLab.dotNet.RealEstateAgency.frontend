import React from "react";
import './Styles/RequestList.css';
import './Styles/Paginate.css';
import RentalAnnouncementListItem from './RentalAnnouncementListItem'

class ReservationList extends React.Component {

  moreInfo = (id) =>
  {
    console.log("more");
    this.props.history && this.props.history.push("/adv/" + id);
  }

  render(){
    return ( 
    <div className="RequestList">
        {this.props.reservations.map((rentReq) =>  (<RentalAnnouncementListItem key={rentReq.Id} model={rentReq} moreInfo={this.moreInfo}/>))}
    </div>
    )
  };

  componentDidMount()
  {
      this.props.fetchReservations();
  }
}

export default  ReservationList;
