//loaded initial state data from within the reducer rather than in the store file now
import { contacts } from "../static-data";

export default (state = { contacts }, action) => {
  // console.log("In contact reducer: ", action);
  return state; //D.R. hack - just the contacts value returned
};
