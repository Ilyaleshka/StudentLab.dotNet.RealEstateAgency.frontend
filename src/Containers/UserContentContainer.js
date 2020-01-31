import { connect } from 'react-redux';
import UserContent from '../Components/UserContent';
import {changeProfileContentType} from "../Store/ActionCreators/UI"

const mapStateToProps = (state) => ({
    contentType: state.UI.profileContentType,
});

const mapDispatchToProps = {
    changePageContentType: changeProfileContentType,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContent);
