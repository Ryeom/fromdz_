import { combineReducers } from 'redux'
import counter from './Counter'
const RootReducers = combineReducers({
  counter,
})

export default RootReducers
