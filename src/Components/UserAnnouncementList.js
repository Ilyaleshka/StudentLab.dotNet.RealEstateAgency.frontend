import React from "react";
import ReactPaginate from 'react-paginate';
import UserAnnouncementItem from "./UserAnnouncementListItem";
import './Styles/AnnouncementList.css';
import './Styles/Paginate.css';

class UserAnnouncementList extends React.Component {

  moreInfo = (id) =>
  {
    console.log("more");
    this.props.history && this.props.history.push("/adv/" + id);
  }

  render(){
    return ( 
    <div className="AnnouncementList">
        {this.props.rentAnnouncements.map((rentReq) =>  
        (<UserAnnouncementItem key={rentReq.Id} 
          model={rentReq} 
          acceptHandler={this.props.acceptReservation} 
          completeHandler={this.props.completeReservation} 
          rejectHandler={this.props.rejectReservation}
          deleteHandler={this.props.deleteAnnouncement}
          moreInfoHandler={this.moreInfo}
          onUpdate={this.updateHandler}/>))}
    </div>
    )
  };

  updateHandler = () =>
  {
    this.props.fetchRentalAnnouncements();
  }

  componentDidMount()
  {
    this.props.fetchRentalAnnouncements();
  }
}

export default  UserAnnouncementList;


/*acceptReservation: acceptReservation,
    rejectReservation: rejectReservation,
    completeReservation: completeReservation */// deleteAnnouncement:deleteAnnouncement,
   // deleteRentRequest: