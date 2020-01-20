import { connect } from 'react-redux';
import {requestAdvertisements} from '../Store/AsyncActionCreators/advertisements';
import AnnouncementList from '../Components/AnnouncementList';

const mapStateToProps = (state) => ({
    rentAnnouncements: state.advertisementsReducer.rentAnnouncements
});

const mapDispatchToProps = {
    fetchRentalAnnouncements: requestAdvertisements,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementList);

//TODO