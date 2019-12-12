import { actionTypes } from "../ActionTypes/advertisements";

export function rentRequestPending() {
  return {
    type: actionTypes.RENT_REQUESTS_PENDING,
  };
}

export function rentRequestSuccess(data) {
  return {
    type: actionTypes.RENT_REQUESTS_SUCCESS,
    payload: data
  };
}

export function rentRequestError(error) {
  return {
    type: actionTypes.RENT_REQUESTS_ERROR,
    payload: error
  };
}



export function rentAnnouncementPending() {
    return {
      type: actionTypes.RENT_ANNOUNCEMENT_PENDING,
    };
  }
  
  
export function rentAnnouncementSuccess(data) {
    return {
      type: actionTypes.RENT_ANNOUNCEMENT_SUCCESS,
      payload: data
    };
  }
  
  export function rentAnnouncementError(error) {
    return {
      type: actionTypes.RENT_ANNOUNCEMENT_ERROR,
      payload: error
    };
  }
  


/*
    RENT_REQUESTS_PENDING: "RENT_REQUESTS_PENDING",
    RENT_REQUESTS_SUCCESS: "RENT_REQUESTS_SUCCESS",
    RENT_REQUESTS_ERROR: "RENT_REQUESTS_ERROR",

    RENT_ANNOUNCEMENT_PENDING: "RENT_ANNOUNCEMENT_PENDING",
    RENT_ANNOUNCEMENT_SUCCESS: "RENT_ANNOUNCEMENT_SUCCESS",
    RENT_ANNOUNCEMENT_ERROR: "RENT_ANNOUNCEMENT_ERROR",
*/ 