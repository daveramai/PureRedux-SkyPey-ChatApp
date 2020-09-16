import { createStore } from "redux";
import reducer from "../reducers";

const enableReduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, enableReduxDevTool); //loading state from the reducer rather than here now
export default store;
