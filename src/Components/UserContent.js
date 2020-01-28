import React from "react";
import {withRouter} from 'react-router-dom';
import Input from "./Common/ModelInput";
import Button from "./Common/Button";
import "./Styles/SearchForm.css";
import RequestListContainer from "../Containers/UserRequestListContainer";
import AnnouncementList from "../Containers/UserAnnouncementListContainer";
import ReservationContainer from "../Containers/ReservationContainer";

class UserAdvertisement extends React.Component {

    switchToAnnouncements = () => { this.props.changePageContentType("announcements"); };
    switchToRequests = () => { this.props.changePageContentType("requests"); };
    switchToReservations = () => { this.props.changePageContentType("reservations"); };

    createRequestsHandler = () => { this.props.history.push("/adv/request/new"); };
    createAnnouncementHandler = () => { this.props.history.push("/adv/announcement/new"); };

    render(){
        var content;
        switch(this.props.contentType)
        {
            case "announcements":
                content = <AnnouncementList/> 
                break;
            case "requests":
                content = <RequestListContainer/> 
                break;
            case "reservations":
                content = <ReservationContainer/> 
                break;
        }
    return ( 
        <div className="SearchForm">
            <div className="right_content">
                <div className="Menu">
                    <Button value="Rental announcements" onClick={ this.switchToAnnouncements } />
                    <Button value="Rental requests" onClick={ this.switchToRequests}/>
                    <Button value="Reservations" onClick={ this.switchToReservations}/>
                    <Button value="Create announcement" onClick={ this.createAnnouncementHandler}/>
                    <Button value="Create request" onClick={ this.createRequestsHandler}/>
                </div>
            </div>
            <div className="Content">
                   {content}
            </div>
        </div>
    )
    };
};

export default withRouter( UserAdvertisement);
