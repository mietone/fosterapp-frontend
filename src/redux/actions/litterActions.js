import { CREATE_LITTER} from './types'

export function createLitter(litter) {
  return {type: CREATE_LITTER, litter}
}