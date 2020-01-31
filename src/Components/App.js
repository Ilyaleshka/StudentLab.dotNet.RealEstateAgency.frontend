import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom'

import AdvertismentsPage from './Pages/AdvertismentsPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import AnnouncementPage from './Pages/AnnouncementPage';
import RequestPage from './Pages/RequestPage';
import PrivateRoute from '../Containers/PrivateRoute';
import UserPage from '../Containers/UserPageContainer';
import AnnouncementViewItemContainer from '../Containers/AnnouncementViewItemContainer';
import Header from "../Containers/HeaderContainer";
 
class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <PrivateRoute path="/profile" exact component={ UserPage }/>
                <Route path="/" exact component={ AdvertismentsPage }/>
                <Route path="/auth" exact component={ LoginPage }/>
                <Route path="/reg" exact component={ RegistrationPage }/>
                <Route path="/adv" exact component={ AdvertismentsPage }/>
                <PrivateRoute  path="/adv/announcement/new" exact component={ AnnouncementPage }/>
                <PrivateRoute  path="/adv/request/new" exact component={ RequestPage }/>
                <Route path="/adv/:id" exact component={ AnnouncementViewItemContainer }/>
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
