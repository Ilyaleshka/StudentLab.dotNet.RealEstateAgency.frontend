import { actionTypes } from "./actionTypes";

export function registerUserPending() {
  return {
    type: actionTypes.REGISTER_USER_PENDING,
  };
}

export function registerUserSuccess(userInfo) {
  return {
    type: actionTypes.REGISTER_USER_SUCCESS,
    payload: userInfo
  };
}

export function registerUserError(error) {
  return {
    type: actionTypes.REGISTER_USER_ERROR,
    payload: error
  };
}
