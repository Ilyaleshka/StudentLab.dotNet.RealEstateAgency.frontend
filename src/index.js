import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './Containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore, compose ,applyMiddleware } from 'redux';

import rootReducer from "./Store/Reducers"
import thunkMiddleware from 'redux-thunk';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(thunkMiddleware)
);

const store = createStore(rootReducer, enhancers);

// Redux dev tools browser extension is pretty helpful
store.subscribe(() => {
  console.log("STORE STATE", store.getState());
});

//refreshUserInfo(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
        <App />  
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
