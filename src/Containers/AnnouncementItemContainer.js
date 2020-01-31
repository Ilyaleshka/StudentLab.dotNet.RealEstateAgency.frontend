
import { connect } from 'react-redux';
import { createAdvertisement} from '../Store/AsyncActionCreators/advertisements';
import RentalAnnouncementModel from '../Components/RentalAnnouncementItem';

const mapStateToProps = (state) => ({
    user: state.authorization.info
});

const mapDispatchToProps = {
   createHandler: createAdvertisement,
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalAnnouncementModel);

//TODO
