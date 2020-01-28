import { connect } from 'react-redux';
import { requestUserReservations} from '../Store/AsyncActionCreators/userAdvertisements';
import AnnouncementList from '../Components/AnnouncementList';
import ReservationList from '../Components/UserReservationList';

const mapStateToProps = (state) => ({
    reservations: state.userAdvertisementsReducer.userReservations,
});

const mapDispatchToProps = {
    fetchReservations:  requestUserReservations,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationList);
