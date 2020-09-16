import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";
import _ from "lodash";

export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId]; //this is the state of the messages field only for this reducer
      const number = +_.keys(allUserMsgs).pop() + 1; //get the last key and increase by 1. + in front will convert the string into a number.
      return {
        ...state, //keep the current state untouched
        //we use object notation to grab the message with the particular userId
        [userId]: {
          ...allUserMsgs, //we make sure all of the user's messages remain untouched
          //finally we add the new message object with the previously computed number
          [number]: {
            number,
            text: message,
            is_user_msg: true, //will always be true since we are sending the message
          },
        },
      };
    default:
      return state;
  }
}
