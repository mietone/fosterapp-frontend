import {combeinReducers} from 'redux'
import litters from './litterReducer'

const rootReducer = combeinReducers({
  litters
})

export default rootReducer