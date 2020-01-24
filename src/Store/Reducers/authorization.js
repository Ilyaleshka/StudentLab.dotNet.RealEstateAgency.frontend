import {actionTypes} from '../ActionTypes/authorization';

export const initialState = {
    pending: false,
    info: {},
    isLoggedIn : false,
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
                info: action.payload,
                isLoggedIn: true
            }
        case actionTypes.AUTHORIZATION_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }

        case actionTypes.LOGOUT:
            return {
                ...state,
                pending: false,
                info:{},
                isLoggedIn: false
            }
        
        case actionTypes.USER_INFO_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actionTypes.USER_INFO_SUCCESS:
            return {
                ...state,
                pending: false,
                info: action.payload,
                isLoggedIn: true
            }
        case actionTypes.USER_INFO_ERROR:
            return {
                ...state,
                pending: false,
                isLoggedIn: false,
                error: action.payload
            }

        default: 
            return state;
    }
}


//    USER_INFO_PENDING: "USER_INFO_PENDING",
///USER_INFO_SUCCESS: "USER_INFO_SUCCESS",
//USER_INFO_ERROR: "USER_INFO_ERROR",