import { connect } from 'react-redux';
import {requestUserAnnouncements, acceptReservation, rejectReservation, completeReservation,deleteRentRequest,deleteAnnouncement} from '../Store/AsyncActionCreators/userAdvertisements';
import UserAnnouncementList from '../Components/UserAnnouncementList'
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => ({
    rentAnnouncements: state.userAdvertisements.userAnnouncements,
});

const mapDispatchToProps = {
    fetchRentalAnnouncements: requestUserAnnouncements,
    acceptReservation: acceptReservation,
    rejectReservation: rejectReservation,
    completeReservation: completeReservation,
    deleteAnnouncement:deleteAnnouncement,
    deleteRentRequest:deleteRentRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserAnnouncementList));
