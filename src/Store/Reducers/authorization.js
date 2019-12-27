import {actionTypes} from '../ActionTypes/authorization';

export const initialState = {
    pending: false,
    info: {},
    error: null
}

export function authorizationReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.AUTHORIZATION_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actionTypes.AUTHORIZATION_SUCCESS:
            return {
                ...state,
                pending: false,
                info: action.payload
            }
        case actionTypes.AUTHORIZATION_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        default: 
            return state;
    }
}
