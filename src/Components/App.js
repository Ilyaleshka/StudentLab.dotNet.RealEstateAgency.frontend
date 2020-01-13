import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom'

import AuthComponent from './AuthForm';
import RegistrationComponent from './RegistrationForm';
import RentRequestListContainer from '../Containers/RentRequestListContainer';
import AdvertismentsPage from './Pages/AdvertismentsPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
 
class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth" exact component={LoginPage}/>
                <Route path="/reg" exact component={RegistrationPage}/>

                <Route path="/adv" exact component={RentRequestListContainer}/>
                <Route path="/" exact component={AdvertismentsPage}/>

                <Route path="/adv/new" exact component={AuthComponent}/>

                <Route path="/adv/:id" exact component={AuthComponent}/>

                <Route path="/profile" exact component={AuthComponent}/>
            </Switch>
        </BrowserRouter>
    );
  }
}
 
export default App;