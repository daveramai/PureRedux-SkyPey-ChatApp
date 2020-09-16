import React from "react";
import "./App.css";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import store from "../store";
import _ from "lodash";

function App() {
  const { user, activeUserId } = store.getState();
  const contact = store.getState().contact.contacts; //hack for the data provided (reducer left as original)
  return (
    <div className="App">
      <Sidebar contacts={_.values(contact)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
