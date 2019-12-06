import { combineReducers } from "redux";
import renderColorName from "./reducer";
import userColor from "./user";

export default combineReducers({
  renderColorName,
  userColor
});
