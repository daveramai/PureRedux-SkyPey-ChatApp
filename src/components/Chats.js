import React, { Component } from "react";
import "./Chats.css";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

//class component used here in order to manipulate the DOM to auto scroll when a new message is entered.
class Chats extends Component {
  constructor(props) {
    super(props);
    //create a Ref to hold the Chats DOM Node
    this.chatsRef = React.createRef();
  }

  //lifecycle methods introduced here

  //the scroll position updates as soon the component mounts
  componentDidMount() {
    this.scrollToBottom();
  }

  //when a messaged is typed i.e the component updates.
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    //All we are doing is updating the scrollTop property to match the scrollHeight;
    //The this.chatsRef.current refers to the DOM node in question.
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  render() {
    return (
      //DOM reference added to this div here - that holds all the chat conversations
      <div className="Chats scroll" ref={this.chatsRef}>
        {this.props.messages.map((message) => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}
export default Chats;
