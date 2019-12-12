import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import registerUser from '../Store/AsyncActionCreators/registration';
import RegistrationContainer from '../Components/RegistrationComponent'


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    handlerFromParent: registerUser //
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);

//TODO
