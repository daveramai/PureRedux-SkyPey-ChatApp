import React from "react";
import store from "../store";
import { setTypingValue, sendMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value }) => {
  //first retrieve the current state object
  const state = store.getState();

  const handleSubmit = (e) => {
    //upon hitting enter after typing this will follow
    e.preventDefault();
    const { typing, activeUserId } = state;
    if (typing != "" || typing != " ")
      store.dispatch(sendMessage(typing, activeUserId));
  };

  const handleChange = (e) => {
    //updates the typing object key
    store.dispatch(setTypingValue(e.target.value));
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value} //retrieved from the state object specifically the typing key
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;
