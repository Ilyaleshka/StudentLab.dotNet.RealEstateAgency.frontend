
import { connect } from 'react-redux';
import { getAnnoucementInfo} from '../Store/AsyncActionCreators/advertisements';
import RentalAnnouncementViewItem from '../Components/RentalAnnouncementViewItem';
import {withRouter} from 'react-router-dom';
import {reserveAnnouncement, acceptReservation, rejectReservation, completeReservation, deleteAnnouncement} from '../Store/AsyncActionCreators/userAdvertisements';

const mapStateToProps = (state) => ({
    model: state.advertisements.announcementInfo,
    isLoggedIn: state.authorization.isLoggedIn,
    userInfo: state.authorization.info,
});

const mapDispatchToProps = {
    getInfo: getAnnoucementInfo,
    acceptReservation: acceptReservation,
    rejectReservation: rejectReservation,
    completeReservation: completeReservation,
    deleteAnnouncement: deleteAnnouncement,
    reserveAnnouncement: reserveAnnouncement
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RentalAnnouncementViewItem));

// getAnnoucementInfo(id)