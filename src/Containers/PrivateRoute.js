import React from 'react';
import {Route,Redirect} from 'react-router-dom'
import LoginPage from '../Components/Pages/LoginPage';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {
  render() {
    console.log(this.props);
    if(this.props.isLoggedIn)
        return (<Route {...this.props}/>);
    else
        return (<Redirect to="/auth"/>);
  };
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.authorizationReducer.isLoggedIn
});
  
const mapDispatchToProps = {};
  
  
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);



// <Route path="/adv/new" exact rendrcomponent={AdvertismentsPage}/>