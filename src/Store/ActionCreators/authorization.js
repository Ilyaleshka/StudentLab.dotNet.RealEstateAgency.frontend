import { actionTypes } from "../ActionTypes/authorization";

export function authorizationPending() {
  return {
    type: actionTypes.AUTHORIZATION_PENDING,
  };
}

export function authorizationSuccess(data) {
  return {
    type: actionTypes.AUTHORIZATION_SUCCESS,
    payload: data
  };
}

export function authorizationError(error) {
  return {
    type: actionTypes.AUTHORIZATION_ERROR,
    payload: error
  };
}

export function logout(data) {
  return {
    type: actionTypes.LOGOUT,
  };
}

export function  userInfoPending() {
  return {
    type: actionTypes.USER_INFO_PENDING,
  };
}

export function userInfoSuccess(data) {
  return {
    type: actionTypes.USER_INFO_SUCCESS,
    payload: data
  };
}

export function userInfoError(error) {
  return {
    type: actionTypes.AUTHORIZATION_ERROR,
    payload: error
  };
}


//    USER_INFO_PENDING: "USER_INFO_PENDING",
///USER_INFO_SUCCESS: "USER_INFO_SUCCESS",
//USER_INFO_ERROR: "USER_INFO_ERROR",