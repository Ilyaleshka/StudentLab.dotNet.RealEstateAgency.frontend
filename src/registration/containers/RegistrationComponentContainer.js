import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import registerUser from '../utils/registerUser';

const mapStateToProps = (state) => ({
    isLoading: state.app.isLoading,
    clientId: state.user.clients.clientId
});

const mapDispatchToProps = {
    onRegister: actions.loadEmailLogs,
};

const mapStateToProps = (state) => ({
    isLoading: state.app.isLoading,
    clientId: state.user.clients.clientId
});

const mapDispatchToProps = {
    handlerFromParent: actions.loadEmailLogs,
};



handlerFromParent(this.state.form);
    
this.setState({
  form:{fnameInput: "",lnameInput:"",emailInput: "",passwordInput: ""}
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);

//TODO
