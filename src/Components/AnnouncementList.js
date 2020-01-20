import React from "react";
import RentalAnnouncementItem from "./RentalAnnouncementListItem";
import './Styles/AnnouncementList.css';

class AnnouncementList extends React.Component {

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

export default  AnnouncementList;
