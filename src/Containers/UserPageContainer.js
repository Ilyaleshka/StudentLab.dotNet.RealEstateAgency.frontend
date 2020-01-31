import { connect } from 'react-redux';
import UserPage from '../Components/Pages/UserPage';


const mapStateToProps = (state) => ({
    info: state.authorization.info,
    contentType: state.UI.profileContentType,
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
