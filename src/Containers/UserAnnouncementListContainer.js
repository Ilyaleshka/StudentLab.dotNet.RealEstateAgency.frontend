import { connect } from 'react-redux';
import {requestUserAnnouncements} from '../Store/AsyncActionCreators/userAdvertisements';
import UserAnnouncementList from '../Components/UserAnnouncementList'

const mapStateToProps = (state) => ({
    rentAnnouncements: state.userAdvertisementsReducer.userAnnouncements,
});

const mapDispatchToProps = {
    fetchRentalAnnouncements: requestUserAnnouncements,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAnnouncementList);
