import {actionTypes} from '../ActionTypes/advertisements';

export const initialState = {
    rentRequests: [],
    rentAnnouncements: [],
    rentRequestsPending: false,
    rentAnnouncementsPending: false,
    error: null
}

/*
export const actionTypes = {
    RENT_REQUESTS_PENDING: "RENT_REQUESTS_PENDING",
    RENT_REQUESTS_SUCCESS: "RENT_REQUESTS_SUCCESS",
    RENT_REQUESTS_ERROR: "RENT_REQUESTS_ERROR",

    RENT_ANNOUNCEMENT_PENDING: "RENT_ANNOUNCEMENT_PENDING",
    RENT_ANNOUNCEMENT_SUCCESS: "RENT_ANNOUNCEMENT_SUCCESS",
    RENT_ANNOUNCEMENT_ERROR: "RENT_ANNOUNCEMENT_ERROR",
  };
 */

export function advertisementsReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.RENT_REQUESTS_PENDING: 
            return {
                ...state,
                rentRequestsPending: true
            }
        case actionTypes.RENT_REQUESTS_SUCCESS:
            return {
                ...state,
                rentRequestsPending: false,
                rentRequests: action.payload
            }
        case actionTypes.RENT_REQUESTS_ERROR:
            return {
                ...state,
                rentRequestsPending: false,
                error: action.payload
            }

        case actionTypes.RENT_ANNOUNCEMENT_PENDING: 
            return {
                ...state,
                rentAnnouncementsPending: true
            }
        case actionTypes.RENT_ANNOUNCEMENT_SUCCESS:
            return {
                ...state,
                rentAnnouncementsPending: false,
                rentAnnouncements: action.payload
            }
        case actionTypes.RENT_ANNOUNCEMENT_ERROR:
            return {
                ...state,
                rentAnnouncementsPending: false,
                error: action.payload
            }
        default: 
            return state;
    }
}
