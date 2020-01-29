import {actionTypes} from '../ActionTypes/userAdvertisements';

export const initialState = {
    userRequests: [],
    userAnnouncements: [],
    userReservations: [],
    pending: false,
    error: null
}

export function userAdvertisementsReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.USER_REQUESTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actionTypes.USER_REQUESTS_SUCCESS:
            return {
                ...state,
                pending: false,
               // rentRequests: action.payload
                userRequests: action.payload,
            }
        case actionTypes.USER_REQUESTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload,
                userRequests: []
            }

        case actionTypes.USER_ANNOUNCEMENT_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actionTypes.USER_ANNOUNCEMENT_SUCCESS:
            return {
                ...state,
                pending: false,
                userAnnouncements: action.payload,
            }
        case actionTypes.USER_ANNOUNCEMENT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload,
                userAnnouncements:[]
            }
            
        case actionTypes.USER_RESERVATION_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actionTypes.USER_RESERVATION_SUCCESS:
            return {
                ...state,
                pending: false,
                userReservations: action.payload,
            }
        case actionTypes.USER_RESERVATION_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload,
                userReservations: []
            }


        case actionTypes.RESERVATION_CREATE_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actionTypes.RESERVATION_CREATE_SUCCESS:
            return {
                ...state,
                pending: false,
            }
        case actionTypes.RESERVATION_CREATE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }

        case actionTypes.RESERVATION_ACCEPT_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actionTypes.RESERVATION_ACCEPT_SUCCESS:
            return {
                ...state,
                pending: false,
            }
        case actionTypes.RESERVATION_ACCEPT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        
        case actionTypes.RESERVATION_REJECT_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actionTypes.RESERVATION_REJECT_SUCCESS:
            return {
                ...state,
                pending: false,
            }
        case actionTypes.RESERVATION_REJECT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
            
        case actionTypes.RESERVATION_COMPLETE_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actionTypes.RESERVATION_COMPLETE_SUCCESS:
            return {
                ...state,
                pending: false,
            }
        case actionTypes.RESERVATION_COMPLETE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }

        default: 
            return state;
    }
}
