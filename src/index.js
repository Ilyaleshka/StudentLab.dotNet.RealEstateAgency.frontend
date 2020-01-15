import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './Components/App';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers ,applyMiddleware } from 'redux';
import {registrationReducer} from './Store/Reducers/registration';
import {authorizationReducer} from './Store/Reducers/authorization';
import {advertisementsReducer} from './Store/Reducers/advertisements';
import thunkMiddleware from 'redux-thunk';

// you can create index.js in reducers folder and create rootreducer there
var rootreducer = combineReducers({registrationReducer,advertisementsReducer,authorizationReducer});

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(thunkMiddleware)
);
const store = createStore(rootreducer, enhancers);

// Redux dev tools browser extension is pretty helpful
store.subscribe(() => {
  console.log("STORE STATE", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
