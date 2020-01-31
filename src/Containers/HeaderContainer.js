import {withRouter} from 'react-router-dom';
import '../Components/Styles/Header.css';
import Header from "../Components/Header";
import { connect } from 'react-redux';
import {logoutUser} from '../Store/AsyncActionCreators/authorization';

const mapStateToProps = (state) => ({
  isLoggedIn: state.authorization.isLoggedIn
});

const mapDispatchToProps = {
  logoutHandler: logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));

//export default withRouter(Header);