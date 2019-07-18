import * as types from './actionTypes'

export function createLitter(litter) {
  return {type: types.CREATE_LITTER, litter}
}