import { connect } from 'react-redux';
import UserPage from '../Components/Pages/UserPage';
import UserContent from '../Components/UserContent';
import {changeProfileContentType} from "../Store/ActionCreators/UI"

const mapStateToProps = (state) => ({
    contentType: state.UIReducer.profileContentType,
});

const mapDispatchToProps = {
    changePageContentType: changeProfileContentType,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContent);
