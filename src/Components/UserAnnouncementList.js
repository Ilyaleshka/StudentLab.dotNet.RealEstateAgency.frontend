import React from "react";
import ReactPaginate from 'react-paginate';
import RentalAnnouncementItem from "./RentalAnnouncementListItem";
import './Styles/AnnouncementList.css';
import './Styles/Paginate.css';

class UserAnnouncementList extends React.Component {

  render(){
    return ( 
    <div className="AnnouncementList">
        {this.props.rentAnnouncements.map((rentReq) =>  (<RentalAnnouncementItem key={rentReq.Id} model={rentReq}/>))}
    </div>
    )
  };

  componentDidMount()
  {
      this.props.fetchRentalAnnouncements();
  }
}

export default  UserAnnouncementList;
