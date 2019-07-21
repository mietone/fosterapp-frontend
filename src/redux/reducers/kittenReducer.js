import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function kittenReducer(state = initialState.kittens, action) {
  switch (action.type) {
    case types.LOAD_KITTENS_SUCCESS:
      return action.kittens;

    default:
      return state;
  }
}
