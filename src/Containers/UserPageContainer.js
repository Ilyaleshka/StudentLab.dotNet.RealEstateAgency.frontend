import { connect } from 'react-redux';
import UserPage from '../Components/Pages/UserPage';


const mapStateToProps = (state) => ({
    info: state.authorizationReducer.info,
    contentType: state.UIReducer.profileContentType,
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
