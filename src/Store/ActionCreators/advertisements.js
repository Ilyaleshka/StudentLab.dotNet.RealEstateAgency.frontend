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


  
export function rentAnnouncementCreatePending() {
  return {
    type: actionTypes.RENT_ANNOUNCEMENT_CREATE_PENDING,
  };
}


export function rentAnnouncementCreateSuccess(data) {
  return {
    type: actionTypes.RENT_ANNOUNCEMENT_CREATE_SUCCESS,
    payload: data
  };
}

export function rentAnnouncementCreateError(error) {
  return {
    type: actionTypes.RENT_ANNOUNCEMENT_CREATE_ERROR,
    payload: error
  };
}
  

  
export function rentRequestCreatePending() {
  return {
    type: actionTypes.RENT_REQUEST_CREATE_PENDING,
  };
}


export function rentRequestCreateSuccess(data) {
  return {
    type: actionTypes.RENT_REQUEST_CREATE_SUCCESS,
    payload: data
  };
}

export function rentRequestCreateError(error) {
  return {
    type: actionTypes.RENT_REQUEST_CREATE_ERROR,
    payload: error
  };
}


  
export function rentAnnouncementInfoPending() {
  return {
    type: actionTypes.RENT_REQUEST_CREATE_PENDING,
  };
}


export function rentAnnouncementInfoSuccess(data) {
  return {
    type: actionTypes.RENT_REQUEST_CREATE_SUCCESS,
    payload: data
  };
}

export function rentAnnouncementInfoError(error) {
  return {
    type: actionTypes.RENT_REQUEST_CREATE_ERROR,
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

    RENT_ANNOUNCEMENT_CREATE_PENDING: "RENT_ANNOUNCEMENT_CREATE_PENDING",
    RENT_ANNOUNCEMENT_CREATE_SUCCESS: "RENT_ANNOUNCEMENT_CREATE_SUCCESS",
    RENT_ANNOUNCEMENT_CREATE_ERROR: "RENT_ANNOUNCEMENT_CREATE_ERROR",

        RENT_ANNOUNCEMENT_INFO_PENDING: "RENT_ANNOUNCEMENT_INFO_PENDING",
    RENT_ANNOUNCEMENT_INFO_SUCCESS: "RENT_ANNOUNCEMENT_INFO_SUCCESS",
    RENT_ANNOUNCEMENT_INFO_ERROR: "RENT_ANNOUNCEMENT_INFO_ERROR",
*/ 