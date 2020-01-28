import { connect } from 'react-redux';
import {requestUserRequests} from '../Store/AsyncActionCreators/userAdvertisements';
import UserRequestList from '../Components/UserRequestList'

const mapStateToProps = (state) => ({
    rentRequests: state.userAdvertisementsReducer.userRequests,
});

const mapDispatchToProps = {
    fetchRentalRequests: requestUserRequests,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRequestList);

//TODO
