/* eslint-disable no-unused-expressions */
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function kittenReducer(state = initialState.kittens, action) {
  switch (action.type) {
    case types.LOAD_KITTENS_SUCCESS:
      return action.kittens;

    case types.CREATE_KITTEN_SUCCESS:
      return [...state, { ...action.kitten }];

    case types.UPDATE_KITTEN_SUCCESS:
      return state.map(kitten =>
        kitten.id === action.kitten.id ? action.kitten : kitten
      );

    default:
      return state;
  }
}
