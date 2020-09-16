import { combineReducers } from "redux";
import user from "./user";
import contact from "./contacts";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";

export default combineReducers({
  activeUserId,
  user,
  contact,
  messages,
  typing,
});
