import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./post";
import daycare from "./daycare";
import classroom from "./classroom";
import student from "./student";
import image from "./image";
import google from "./google";

export default combineReducers({
  alert,
  auth,
  daycare,
  classroom,
  student,
  image,
  google,
});
