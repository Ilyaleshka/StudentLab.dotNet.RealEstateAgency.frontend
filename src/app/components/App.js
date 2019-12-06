import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom'

import AuthComponent from '../../authorization/components/AuthComponent';
import RegistrationComponent from '../../registration/components/RegistrationComponent';
 
class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth" exact component={AuthComponent}/>
                <Route path="/reg" exact component={RegistrationComponent}/>

                <Route path="/adv" exact component={AuthComponent}/>
                <Route path="/" exact component={AuthComponent}/>

                <Route path="/adv/new" exact component={AuthComponent}/>

                <Route path="/adv/:id" exact component={AuthComponent}/>

                <Route path="/profile" exact component={AuthComponent}/>
            </Switch>
        </BrowserRouter>
    );
  }
}
 
export default App;