import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import list from './list'


const rootReducer = combineReducers({
  router: routerReducer,
  list,
})

export default rootReducer
