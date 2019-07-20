import { combineReducers } from "redux";
import litters from "./litterReducer";
import kittens from "./kittenReducer";

const rootReducer = combineReducers({
  litters,
  kittens
});

export default rootReducer;
