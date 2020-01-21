import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './Components/App';
import { Provider } from 'react-redux';
import { createStore, compose ,applyMiddleware } from 'redux';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from "./Store/Reducers"
import thunkMiddleware from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
 };

const pReducer = persistReducer(persistConfig, rootReducer);

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(thunkMiddleware)
);

const store = createStore(pReducer, enhancers);
const persistor = persistStore(store);

// Redux dev tools browser extension is pretty helpful
store.subscribe(() => {
  console.log("STORE STATE", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
        <App />  
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
