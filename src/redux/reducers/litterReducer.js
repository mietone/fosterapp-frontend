import { CREATE_LITTER } from './actions/types'

export default function litterReducer(state = [], action) {
  switch(action.type) {

    case CREATE_LITTER:
      return [...state, { ...action.litter }]
      
    default:
      return state
  }
}