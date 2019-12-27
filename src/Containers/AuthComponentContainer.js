import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import registerUser from '../Store/AsyncActionCreators/registration';
import RegistrationContainer from '../Components/RegistrationForm'

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    handlerFromParent: authorizeUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);

//TODO
