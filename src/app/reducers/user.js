import { actionTypes } from "../actions/actionTypes";

export default function user(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_RESULT_COLOR:
      return { ...state, userColor: action.payload };
    default:
      return state;
  }
}
