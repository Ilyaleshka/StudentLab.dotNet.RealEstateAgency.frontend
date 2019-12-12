import {actionTypes} from '../ActionTypes/registration';

export const initialState = {
    pending: false,
    token : null,
    info: {},
    error: null
}

export function registrationReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.REGISTRATION_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actionTypes.REGISTRATION_SUCCESS:
            return {
                ...state,
                pending: false,
                info: action.payload
            }
        case actionTypes.REGISTRATION_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        default: 
            return state;
    }
}
