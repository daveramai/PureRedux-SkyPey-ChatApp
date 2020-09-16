//loaded initial state data from within the reducer rather than in the store file now
import { generateUser } from "../static-data";

export default function user(state = generateUser(), action) {
  // console.log("In user reducer: ", action);
  return state;
}
