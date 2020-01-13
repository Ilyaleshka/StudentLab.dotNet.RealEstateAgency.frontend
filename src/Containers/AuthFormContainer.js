
import { connect } from 'react-redux';
import {authorizeUser} from '../Store/AsyncActionCreators/authorization';
import AuthForm from '../Components/AuthForm';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    handlerFromParent: authorizeUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);

//TODO
