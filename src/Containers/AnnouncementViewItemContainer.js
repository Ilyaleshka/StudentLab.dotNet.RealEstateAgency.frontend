
import { connect } from 'react-redux';
import { getAnnoucementInfo} from '../Store/AsyncActionCreators/advertisements';
import RentalAnnouncementViewItem from '../Components/RentalAnnouncementViewItem';

const mapStateToProps = (state) => ({
    model: state.advertisementsReducer.announcementInfo
});

const mapDispatchToProps = {
    getInfo: getAnnoucementInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalAnnouncementViewItem);

// getAnnoucementInfo(id)