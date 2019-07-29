/* eslint-disable no-unused-expressions */
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function litterReducer(state = initialState.litters, action) {
  switch (action.type) {
    case types.LOAD_LITTERS_SUCCESS:
      return action.litters;

    case types.CREATE_LITTER_SUCCESS:
      return [...state, { ...action.litter }];

    case types.UPDATE_LITTER_SUCCESS:
      return state.map(litter =>
        litter.id === action.litter.id ? action.litter : litter
      );

    default:
      return state;
  }
}
