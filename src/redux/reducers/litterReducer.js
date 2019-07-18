import * as types from '../actions/actionTypes'

export default function litterReducer(state = [], action) {
  switch(action.type) {

    case types.CREATE_LITTER:
      return [...state, { ...action.litter }]

    default:
      return state
  }
}