import { connect } from 'react-redux';
import {requestAnnouncements} from '../Store/AsyncActionCreators/advertisements';
import AnnouncementList from '../Components/AnnouncementList';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => ({
    rentAnnouncements: state.advertisementsReducer.rentAnnouncements,
    pageCount: state.advertisementsReducer.pageCount,
    pageSize: state.advertisementsReducer.pageSize,
    currentPage: state.advertisementsReducer.currentPage,
    filters: state.advertisementsReducer.filters,
});

const mapDispatchToProps = {
    fetchRentalAnnouncements: requestAnnouncements,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnnouncementList));

//TODO
/*
rentRequests: [],
rentAnnouncements: [],
rentRequestsPending: false,
rentAnnouncementsPending: false,
error: null,
pageSize: 5,
pageNumber: 1,
currentPage: 1,
pageCount: 0*/