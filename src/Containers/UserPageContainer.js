import { connect } from 'react-redux';
import UserPage from '../Components/Pages/UserPage';


const mapStateToProps = (state) => ({
    info: state.authorizationReducer.info
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
