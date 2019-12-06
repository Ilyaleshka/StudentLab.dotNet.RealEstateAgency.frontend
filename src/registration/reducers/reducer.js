import {actionTypes} from '../actions/actionTypes';

export const initialState = {
    user: 
    {
        pending: false,
        info: {},
        error: null
    }
}

export function productsReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.REGISTER_USER_PENDING: 
            return {
                ...state,
                user:{
                ...state.user,
                pending: true
                }
            }
        case actionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                user:{
                    ...state.user,
                    pending: false,
                    info: action.payload
                    }
            }
        case actionTypes.REGISTER_USER_ERROR:
            return {
                ...state,
                user:{
                    ...state.user,
                    pending: false,
                    error: action.payload
                    }
            }
        default: 
            return state;
    }
}

export const getUserInfo = state => state.user.info;
export const getUserPending = state => state.user.pending;
export const getUserError = state => state.user.error;