import * as types from "../actions/actionTypes";

export default function litterReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_LITTER:
      return [...state, { ...action.litter }];

    case types.LOAD_LITTERS_SUCCESS:
      return action.litters;

    default:
      return state;
  }
}
