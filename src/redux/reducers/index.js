import { combineReducers } from "redux";
import litters from "./litterReducer";
import kittens from "./kittenReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  litters,
  kittens,
  apiCallsInProgress
});

export default rootReducer;
