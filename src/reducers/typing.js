import { SET_TYPING_VALUE, SEND_MESSAGE } from "../constants/action-types";

export default function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE: //used to clear the message box after sending a message (reset the typing state)
      return "";
    default:
      return state;
  }
}
