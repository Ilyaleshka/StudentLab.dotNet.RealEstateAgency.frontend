import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom'

import AuthComponent from './AuthForm';
import AdvertismentsPage from './Pages/AdvertismentsPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import AnnouncementPage from './Pages/AnnouncementPage';
import RequestPage from './Pages/RequestPage';
 
class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={AdvertismentsPage}/>
                <Route path="/auth" exact component={LoginPage}/>
                <Route path="/reg" exact component={RegistrationPage}/>
                <Route path="/adv" exact component={AdvertismentsPage}/>
                <Route path="/adv/announcement/new" exact render ={ (props)=> <AnnouncementPage create={true}/>}/>
                <Route path="/adv/request/new" exact render ={ (props)=> <RequestPage create={true}/>}/>
                <Route path="/adv/:id" exact component={AuthComponent}/>
                <Route path="/profile" exact component={AuthComponent}/>
            </Switch>
        </BrowserRouter>
    );
  }
}
 
export default App;


// <Route path="/adv/new" exact rendrcomponent={AdvertismentsPage}/>