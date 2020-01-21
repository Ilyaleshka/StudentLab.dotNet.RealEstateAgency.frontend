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
        default: 
            return state;
    }
}

/*
type: actionTypes.LOGOUT_PENDING,
};
}

export function logoutSuccess(data) {
return {
  type: actionTypes.LOGOUT_SUCCESS,*/