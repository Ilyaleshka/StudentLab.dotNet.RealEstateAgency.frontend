import { combineReducers } from 'redux';

import { registrationReducer } from './registration';
import { authorizationReducer } from './authorization';
import { advertisementsReducer } from './advertisements';
import { UIReducer } from "./UI";
import {userAdvertisementsReducer} from './userAdvertisements';

// Do not include word reducer. You'll need to acces data like state.registrationReducer.something which is a bit confusing.
export default combineReducers({ registration: registrationReducer, advertisements: advertisementsReducer, authorization: authorizationReducer, UI: UIReducer, userAdvertisements: userAdvertisementsReducer });