import { connect } from 'react-redux';
import registerUser from '../Store/AsyncActionCreators/registration';
import RegistrationContainer from '../Components/RegistrationForm'


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    handlerFromParent: registerUser //
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);

//TODO
