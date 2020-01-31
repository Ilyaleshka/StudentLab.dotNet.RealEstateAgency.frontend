import { connect } from 'react-redux';
import { createRentalRequest} from '../Store/AsyncActionCreators/advertisements';
import RentalRequestModel from '../Components/RentalRequestItem';

const mapStateToProps = (state) => ({
    user: state.authorization.info
});

const mapDispatchToProps = {
   createHandler: createRentalRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalRequestModel);

//TODO
