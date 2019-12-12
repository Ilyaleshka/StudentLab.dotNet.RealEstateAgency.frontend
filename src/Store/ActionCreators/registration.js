import { actionTypes } from "../ActionTypes/registration";

export function registrationPending() {
  return {
    type: actionTypes.REGISTRATION_PENDING,
  };
}

export function registrationSuccess(data) {
  return {
    type: actionTypes.REGISTRATION_SUCCESS,
    payload: data
  };
}

export function registrationError(error) {
  return {
    type: actionTypes.REGISTRATION_ERROR,
    payload: error
  };
}
