import { connect } from 'react-redux';
import { requestUserReservations} from '../Store/AsyncActionCreators/userAdvertisements';
import ReservationList from '../Components/UserReservationList';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => ({
    reservations: state.userAdvertisements.userReservations,
});

const mapDispatchToProps = {
    fetchReservations:  requestUserReservations,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReservationList));
