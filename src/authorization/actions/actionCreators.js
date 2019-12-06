import { actionTypes } from "./actionTypes";

export function userRegistration(credentials) {
  return {
    type: actionTypes.REGISTER_USER,
    payload: credentials
  };
}
