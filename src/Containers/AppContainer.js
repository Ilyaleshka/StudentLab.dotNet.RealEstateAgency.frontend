import { connect } from 'react-redux';
import {refreshUserInfo} from '../Store/AsyncActionCreators/authorization';
import App from '../Components/App';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
    refreshUserInfo: refreshUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
