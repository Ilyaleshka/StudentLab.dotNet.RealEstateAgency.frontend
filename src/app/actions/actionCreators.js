import { actionTypes } from "./actionTypes";

export function getResultColor(color) {
  return {
    type: actionTypes.GET_RESULT_COLOR,
    payload: color
  };
}
