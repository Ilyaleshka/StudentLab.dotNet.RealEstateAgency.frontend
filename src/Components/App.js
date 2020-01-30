import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom'

import AuthComponent from './AuthForm';
import AdvertismentsPage from './Pages/AdvertismentsPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import AnnouncementPage from './Pages/AnnouncementPage';
import RequestPage from './Pages/RequestPage';
import PrivateRoute from '../Containers/PrivateRoute';
import UserPage from '../Containers/UserPageContainer';
import AnnouncementViewItemContainer from '../Containers/AnnouncementViewItemContainer';
 
class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/profile" exact component={UserPage}/>
                <Route path="/" exact component={AdvertismentsPage}/>
                <Route path="/auth" exact component={LoginPage}/>
                <Route path="/reg" exact component={RegistrationPage}/>
                <Route path="/adv" exact component={AdvertismentsPage}/>
                {/* Why don't you just pass component like in <Route/>? Anonymous functions in jsx is a bad practice */}
                <PrivateRoute  path="/adv/announcement/new" exact render ={ (props)=> <AnnouncementPage create={true}/>}/>
                <PrivateRoute  path="/adv/request/new" exact render ={ (props)=> <RequestPage create={true}/>}/>
                <Route path="/adv/:id" exact component={AnnouncementViewItemContainer}/>

            </Switch>
        </BrowserRouter>
    );
  }

  componentDidMount()
  {
    this.props.refreshUserInfo();
  }
}
 
export default App;


// <Route path="/adv/new" exact rendrcomponent={AdvertismentsPage}/>
                /*<Route path="/profile" exact component={AuthComponent}/>*/