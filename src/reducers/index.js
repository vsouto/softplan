import { combineReducers } from 'redux'
import heroes from './todos'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  heroes
})

export default rootReducer
