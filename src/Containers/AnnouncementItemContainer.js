
import { connect } from 'react-redux';
import { createAdvertisement} from '../Store/AsyncActionCreators/advertisements';
import RentalAnnouncementModel from '../Components/RentalAnnouncementModel';

const mapStateToProps = (state) => ({
    user: state.authorizationReducer.info
});

const mapDispatchToProps = {
   createHandler: createAdvertisement,
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalAnnouncementModel);

//TODO
