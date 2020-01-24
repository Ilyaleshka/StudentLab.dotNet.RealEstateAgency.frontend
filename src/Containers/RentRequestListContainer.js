import { connect } from 'react-redux';
import {requestRentRequests} from '../Store/AsyncActionCreators/advertisements';
import RentRequestList from '../Components/RequestList'

const mapStateToProps = (state) => ({
    rentRequests: state.advertisementsReducer.rentRequests,
    pageCount: state.advertisementsReducer.pageCount,
    pageSize: state.advertisementsReducer.pageSize,
    currentPage: state.advertisementsReducer.currentPage,
    filters: state.advertisementsReducer.filters,
});

const mapDispatchToProps = {
    fetchRentalRequests: requestRentRequests,
};

export default connect(mapStateToProps, mapDispatchToProps)(RentRequestList);

//TODO
