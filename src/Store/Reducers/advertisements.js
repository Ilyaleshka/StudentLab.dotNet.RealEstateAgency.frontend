import {actionTypes} from '../ActionTypes/advertisements';

export const initialState = {
    rentRequests: [],
    rentAnnouncements: [],
    rentRequestsPending: false,
    rentAnnouncementsPending: false,
    error: null,
    pageSize: 5,
    currentPage: 1,
    pageCount: 0,
    filters: {}
}

/*
export const actionTypes = {
    RENT_REQUESTS_PENDING: "RENT_REQUESTS_PENDING",
    RENT_REQUESTS_SUCCESS: "RENT_REQUESTS_SUCCESS",
    RENT_REQUESTS_ERROR: "RENT_REQUESTS_ERROR",

    RENT_ANNOUNCEMENT_PENDING: "RENT_ANNOUNCEMENT_PENDING",
    RENT_ANNOUNCEMENT_SUCCESS: "RENT_ANNOUNCEMENT_SUCCESS",
    RENT_ANNOUNCEMENT_ERROR: "RENT_ANNOUNCEMENT_ERROR",

    RENT_ANNOUNCEMENT_CREATE_PENDING: "RENT_ANNOUNCEMENT_CREATE_PENDING",
    RENT_ANNOUNCEMENT_CREATE_SUCCESS: "RENT_ANNOUNCEMENT_CREATE_SUCCESS",
    RENT_ANNOUNCEMENT_CREATE_ERROR: "RENT_ANNOUNCEMENT_CREATE_ERROR",
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
               // rentRequests: action.payload
                rentRequests: action.payload.RentalRequests,
                currentPage: action.payload.CurrentPage,
                pageCount: action.payload.PageCount
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
                rentAnnouncements: action.payload.RentalAnnouncements,
                currentPage: action.payload.CurrentPage,
                pageCount: action.payload.PageCount

            }
        case actionTypes.RENT_ANNOUNCEMENT_ERROR:
            return {
                ...state,
                rentAnnouncementsPending: false,
                error: action.payload
            }


        case actionTypes.RENT_ANNOUNCEMENT_CREATE_PENDING: 
            return {
                ...state,
                creationPending: true
            }
        case actionTypes.RENT_ANNOUNCEMENT_CREATE_SUCCESS:
            return {
                ...state,
                creationPending: false,
                announcement: action.payload
            }
        case actionTypes.RENT_ANNOUNCEMENT_CREATE_ERROR:
            return {
                ...state,
                creationPending: false,
                error: action.payload
            }

        
        case actionTypes.RENT_REQUEST_CREATE_PENDING: 
            return {
                ...state,
                creationPending: true
            }
        case actionTypes.RENT_REQUEST_CREATE_SUCCESS:
            return {
                ...state,
                creationPending: false,
                request: action.payload
            }
        case actionTypes.RENT_REQUEST_CREATE_ERROR:
            return {
                ...state,
                creationPending: false,
                error: action.payload
            }


        case actionTypes.RENT_ANNOUNCEMENT_INFO_PENDING: 
            return {
                ...state,
                infoPending: true
            }
        case actionTypes.RENT_ANNOUNCEMENT_INFO_SUCCESS:
            return {
                ...state,
                imfoPending: false,
                announcementInfo: action.payload
            }
        case actionTypes.RENT_ANNOUNCEMENT_INFO_ERROR:
            return {
                ...state,
                infoPending: false,
                error: action.payload
            }

        case actionTypes.UPDATE_FILTERS:
            return {
                ...state,
                currentPage: 1,
               filters: action.payload
            }
        default: 
            return state;
    }
}
