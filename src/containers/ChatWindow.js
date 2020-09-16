import React from "react";
import store from "../store";
import _ from "lodash";
import "./ChatWindow.css";

//3 sections of the chat window imported here
import Header from "../components/Header";
import Chats from "../components/Chats";
import MessageInput from "./MessageInput"; //interacts with store

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contact.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const { typing } = state; //destructured the typing value from state object which is "" by default (see typing.js reducer)

  return (
    <div className="ChatWindow scroll">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;
