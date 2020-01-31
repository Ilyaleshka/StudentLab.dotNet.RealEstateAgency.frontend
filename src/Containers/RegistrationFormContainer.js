import { connect } from 'react-redux';
import registerUser from '../Store/AsyncActionCreators/registration';
import RegistrationForm from '../Components/RegistrationForm'


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    handleRegistration: registerUser //
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

//TODO
