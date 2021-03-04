import { combineReducers } from "redux";
import { pagination } from "./pagination";
// import { students } from "./students";
import { userInteract } from "./userInteract";
import { auth } from "./auth";
import { students } from "./Student";
export default combineReducers({
  auth,
  students,
  pagination,
  // students,
  userInteract,
});
