import { connect } from 'react-redux';
import {requestAdvertisements} from '../Store/AsyncActionCreators/advertisements';
import RentRequestList from '../Components/RequestList'

const mapStateToProps = (state) => ({
    rentRequests: state.advertisementsReducer.rentRequests
});

const mapDispatchToProps = {
    fetchRentalRequests: requestAdvertisements,
};

export default connect(mapStateToProps, mapDispatchToProps)(RentRequestList);

//TODO
