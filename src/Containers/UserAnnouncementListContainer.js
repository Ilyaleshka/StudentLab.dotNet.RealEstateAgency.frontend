import { connect } from 'react-redux';
import {requestUserAnnouncements, acceptReservation, rejectReservation, completeReservation,deleteRentRequest,deleteAnnouncement} from '../Store/AsyncActionCreators/userAdvertisements';
import UserAnnouncementList from '../Components/UserAnnouncementList'

const mapStateToProps = (state) => ({
    rentAnnouncements: state.userAdvertisementsReducer.userAnnouncements,
});

const mapDispatchToProps = {
    fetchRentalAnnouncements: requestUserAnnouncements,
    acceptReservation: acceptReservation,
    rejectReservation: rejectReservation,
    completeReservation: completeReservation,
    deleteAnnouncement:deleteAnnouncement,
    deleteRentRequest:deleteRentRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAnnouncementList);
