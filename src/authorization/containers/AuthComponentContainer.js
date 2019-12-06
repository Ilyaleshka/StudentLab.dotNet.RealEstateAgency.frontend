const mapStateToProps = (state) => ({
    isLoading: state.app.isLoading,
    clientId: state.user.clients.clientId
});

const mapDispatchToProps = {
    handlerFromParent: actions.loadEmailLogs,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);

//TODO
