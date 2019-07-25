import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function litterReducer(state = initialState.litters, action) {
  switch (action.type) {
    case types.CREATE_LITTER_SUCCESS:
      return [...state, { ...action.litter }];

    case types.UPDATE_LITTER_SUCCESS:
      return [
        ...state.filter(litter => litter.id !== action.litter.id),
        Object.assign({}, action.litter)
      ];

    case types.LOAD_LITTERS_SUCCESS:
      return action.litters;

    default:
      return state;
  }
}
