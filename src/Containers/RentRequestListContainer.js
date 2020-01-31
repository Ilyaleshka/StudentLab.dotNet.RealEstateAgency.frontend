import { connect } from 'react-redux';
import {requestRentRequests} from '../Store/AsyncActionCreators/advertisements';
import RentRequestList from '../Components/RequestList'

const mapStateToProps = (state) => ({
    rentRequests: state.advertisements.rentRequests,
    pageCount: state.advertisements.pageCount,
    pageSize: state.advertisements.pageSize,
    currentPage: state.advertisements.currentPage,
    filters: state.advertisements.filters,
});

const mapDispatchToProps = {
    fetchRentalRequests: requestRentRequests,
};

export default connect(mapStateToProps, mapDispatchToProps)(RentRequestList);

//TODO
