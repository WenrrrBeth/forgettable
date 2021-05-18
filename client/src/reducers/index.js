import { combineReducers } from "redux";
import profile from "./profile";
import forgettable from "./forgettable";
import shared from "./sharedFgtb";
import unshared from "./unsharedFgtb";
import saved from "./savedFgtb";

export default combineReducers({
  profile,
  forgettable,
  shared,
  unshared,
  saved,
});
