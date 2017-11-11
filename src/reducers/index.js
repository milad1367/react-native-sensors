import { combineReducers } from 'redux'
import pedometer from './pedometer'
import gps from './gps'

const sensorsApp = combineReducers({
  pedometer,
  gps
})

export default sensorsApp