import {combineReducers} from 'redux'
import litters from './litterReducer'

const rootReducer = combineReducers({
  litters
})

export default rootReducer