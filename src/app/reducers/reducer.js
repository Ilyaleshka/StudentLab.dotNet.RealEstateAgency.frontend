import { actionTypes } from "../actions/actionTypes";

export default function renderColorName(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_RESULT_COLOR:
      return { ...state, color: action.payload };
    default:
      return state;
  }
}
