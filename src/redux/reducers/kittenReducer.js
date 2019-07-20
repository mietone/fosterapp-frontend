import * as types from "../actions/actionTypes";

export default function kittenReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_KITTENS_SUCCESS:
      return action.kittens;

    default:
      return state;
  }
}
