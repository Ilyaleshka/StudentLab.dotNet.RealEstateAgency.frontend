import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';
import rootReducer from './app/reducers';
import {productsReducer} from './registration/reducers/reducer'

var red = combineReducers(productsReducer,rootReducer);

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(red, undefined, enhancers);

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
