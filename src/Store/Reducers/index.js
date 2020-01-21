import { combineReducers } from 'redux';

import { registrationReducer } from './registration';
import { authorizationReducer } from './authorization';
import { advertisementsReducer } from './advertisements';
import { UIReducer } from "./UI";

export default combineReducers({ registrationReducer, advertisementsReducer, authorizationReducer, UIReducer });