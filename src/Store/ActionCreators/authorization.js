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
