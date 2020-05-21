import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import image from "./image";
import google from "./google";
import calendar from "./calendar";
import livestream from "./livestream";

export default combineReducers({
  alert,
  auth,
  image,
  google,
  calendar,
  livestream
});
