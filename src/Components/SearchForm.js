import React from "react";
import {withRouter} from 'react-router-dom';
import Input from "./Common/ModelInput";
import Button from "./Common/Button";
import "./Styles/SearchForm.css";
import AnnouncementsListContainer from "../Containers/AnnouncementsListContainer";
import RentRequestListContainer from "../Containers/RentRequestListContainer";

class SearchForm extends React.Component {

    state =
    {
        minCost:0,
        maxCost:0,
        minArea:0,
        maxArea:0,
    };

    minCostHandler = (event) => { this.setState({ minCost: event.target.value}); };
    maxCostHandler = (event) => { this.setState({ maxCost: event.target.value}); };
    minAreaHandler = (event) => { this.setState({ minArea: event.target.value}); };
    maxAreaHandler = (event) => { this.setState({ maxArea: event.target.value}); };

    switchToAnnouncements = () => { this.props.changePageContentType("announcements"); };
    switchToRequests = () => { this.props.changePageContentType("requests"); };
    createRequestsHandler = () => { this.props.history.push("/adv/request/new"); };
    createAnnouncementHandler = () => { this.props.history.push("/adv/announcement/new"); };

    filterHandler = () => { this.props.updateFilters({...this.state}) }; //TODO

    render(){
    return ( 
        <div className="SearchForm">
            <div className="right_content">
                <div className="Menu">
                    <Button value="Rental announcements" onClick={ this.switchToAnnouncements } />
                    <Button value="Rental requests" onClick={ this.switchToRequests}/>
                    <Button value="Create announcement" onClick={ this.createAnnouncementHandler}/>
                    <Button value="Create request" onClick={ this.createRequestsHandler}/>
                </div>
                <div className="Filters">
                    <Input type="number" value={this.state.minCost} onChange={this.minCostHandler} label="Min cost"/>
                    <Input type="number" value={this.state.maxCost} onChange={this.maxCostHandler} label="Max cost"/>
                    <Input type="number" value={this.state.minArea} onChange={this.minAreaHandler} label="Min area"/>
                    <Input type="number" value={this.state.maxArea} onChange={this.maxAreaHandler} label="Max area"/>
                    <Button value="Filter" onClick={ this.filterHandler }/>
                </div>
            </div>
            <div className="Content">
                {
                    (this.props.contentType === "announcements") 
                    ? <AnnouncementsListContainer/> 
                    : <RentRequestListContainer/>
                }
            </div>
        </div>
    )
    };
};

export default withRouter(SearchForm);
