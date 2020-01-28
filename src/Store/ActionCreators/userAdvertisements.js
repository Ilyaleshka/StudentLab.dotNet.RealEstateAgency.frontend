import { actionTypes } from "../ActionTypes/userAdvertisements";

// USER REQUESTS
export function userRequestPending() {
    return {
        type: actionTypes.USER_REQUESTS_PENDING,
    };
}
  
export function userRequestSuccess(data) {
    return {
        type: actionTypes.USER_REQUESTS_SUCCESS,
        payload: data
    };
}
  
export function userRequestError(error) {
    return {
        type: actionTypes.USER_REQUESTS_ERROR,
        payload: error
    };
}
  
  
// USER ANNOUNCEMENTS
export function userAnnouncementPending() {
    return {
        type: actionTypes.USER_ANNOUNCEMENT_PENDING,
    };
}


export function userAnnouncementSuccess(data) {
    return {
        type: actionTypes.USER_ANNOUNCEMENT_SUCCESS,
        payload: data
    };
}

export function userAnnouncementError(error) {
    return {
        type: actionTypes.USER_ANNOUNCEMENT_ERROR,
        payload: error
    };
}

// USER RESERVATIONS
export function userReservationsPending() {
    return {
        type: actionTypes.USER_RESERVATION_PENDING,
    };
}


export function userReservationsSuccess(data) {
    return {
        type: actionTypes.USER_RESERVATION_SUCCESS,
        payload: data
    };
}

export function userReservationsError(error) {
    return {
        type: actionTypes.USER_RESERVATION_ERROR,
        payload: error
    };
}
  
  
// DELETE REQUEST
export function rentRequestDeletePending() {
  return {
    type: actionTypes.RENT_REQUESTS_DELETE_PENDING,
  };
}

export function rentRequestDeleteSuccess(data) {
  return {
    type: actionTypes.RENT_REQUESTS_DELETE_SUCCESS,
    payload: data
  };
}

export function rentRequestDeleteError(error) {
  return {
    type: actionTypes.RENT_REQUESTS_DELETE_ERROR,
    payload: error
  };
}


// DELETE ANNOUNCEMENT
export function rentAnnouncementDeletePending() {
    return {
        type: actionTypes.RENT_ANNOUNCEMENT_DELETE_PENDING,
    };
}
  
  
export function rentAnnouncementDeleteSuccess(data) {
    return {
        type: actionTypes.RENT_ANNOUNCEMENT_DELETE_SUCCESS,
        payload: data
    };
}
  
export function rentAnnouncementDeleteError(error) {
    return {
        type: actionTypes.RENT_ANNOUNCEMENT_DELETE_ERROR,
        payload: error
    };
}


  // CREATE RESERVATION
export function reservationCreatePending() {
    return {
        type: actionTypes.RESERVATION_CREATE_PENDING,
    };
}


export function reservationCreateSuccess(data) {
    return {
        type: actionTypes.RESERVATION_CREATE_SUCCESS,
        payload: data
    };
}

export function reservationCreateError(error) {
    return {
        type: actionTypes.RESERVATION_CREATE_ERROR,
        payload: error
    };
}
  

// ACCEPT RESERVATION
export function reservationAcceptPending() {
    return {
        type: actionTypes.RESERVATION_ACCEPT_PENDING,
    };
}


export function reservationAcceptSuccess(data) {
    return {
        type: actionTypes.RESERVATION_ACCEPT_SUCCESS,
        payload: data
    };
}

export function reservationAcceptError(error) {
    return {
        type: actionTypes.RESERVATION_ACCEPT_ERROR,
        payload: error
    };
}


// REJECT RESERVATION
export function reservationRejectPending() {
    return {
        type: actionTypes.RESERVATION_REJECT_PENDING,
    };
}


export function reservationRejectSuccess(data) {
    return {
        type: actionTypes.RESERVATION_REJECT_SUCCESS,
        payload: data
    };
}

export function reservationRejectError(error) {
    return {
        type: actionTypes.RESERVATION_REJECT_ERROR,
        payload: error
    };
}


// COMPLITE RESERVATION
export function reservationComplitePending() {
    return {
        type: actionTypes.RESERVATION_COMPLETE_PENDING,
    };
}
  
  
export function reservationCompliteSuccess(data) {
    return {
        type: actionTypes.RESERVATION_COMPLETE_SUCCESS,
        payload: data
    };
}
  
export function reservationCompliteError(error) {
    return {
        type: actionTypes.RESERVATION_COMPLETE_ERROR,
        payload: error
    };
}


/*
export const actionTypes = {

    USER_REQUESTS_PENDING: "USER_REQUESTS_PENDING",
    USER_REQUESTS_SUCCESS: "USER_REQUESTS_SUCCESS",
    USER_REQUESTS_ERROR: "USER_REQUESTS_ERROR",

    USER_ANNOUNCEMENT_PENDING: "USER_ANNOUNCEMENT_PENDING",
    USER_ANNOUNCEMENT_SUCCESS: "USER_ANNOUNCEMENT_SUCCESS",
    USER_ANNOUNCEMENT_ERROR: "USER_ANNOUNCEMENT_ERROR",

    USER_RESERVATION_PENDING: "USER_RESERVATION_PENDING",
    USER_RESERVATION_SUCCESS: "USER_RESERVATION_SUCCESS",
    USER_RESERVATION_ERROR: "USER_RESERVATION_ERROR",

    RENT_REQUESTS_DELETE_PENDING: "RENT_REQUESTS_DELETE_PENDING",
    RENT_REQUESTS_DELETE_SUCCESS: "RENT_REQUESTS_DELETE_SUCCESS",
    RENT_REQUESTS_DELETE_ERROR: "RENT_REQUESTS_DELETE_ERROR",

    RENT_ANNOUNCEMENT_DELETE_PENDING: "RENT_ANNOUNCEMENT_DELETE_PENDING",
    RENT_ANNOUNCEMENT_DELETE_SUCCESS: "RENT_ANNOUNCEMENT_DELETE_SUCCESS",
    RENT_ANNOUNCEMENT_DELETE_ERROR: "RENT_ANNOUNCEMENT_DELETE_ERROR",

    RESERVATION_CREATE_PENDING: "RESERVATION_CREATE_PENDING",
    RESERVATION_CREATE_SUCCESS: "RESERVATION_CREATE_SUCCESS",
    RESERVATION_CREATE_ERROR: "RESERVATION_CREATE_ERROR",

    RESERVATION_ACCEPT_PENDING: "RESERVATION_ACCEPT_PENDING",
    RESERVATION_ACCEPT_SUCCESS: "RESERVATION_ACCEPT_SUCCESS",
    RESERVATION_ACCEPT_ERROR: "RESERVATION_ACCEPT_ERROR",
    
    RESERVATION_REJECT_PENDING: "RESERVATION_REJECT_PENDING",
    RESERVATION_REJECT_SUCCESS: "RESERVATION_REJECT_SUCCESS",
    RESERVATION_REJECT_ERROR: "RESERVATION_REJECT_ERROR",

    RESERVATION_COMPLETE_PENDING: "RESERVATION_COMPLETE_PENDING",
    RESERVATION_COMPLETE_SUCCESS: "RESERVATION_COMPLETET_SUCCESS",
    RESERVATION_COMPLETE_ERROR: "RESERVATION_COMPLETE_ERROR",
  };

*/

