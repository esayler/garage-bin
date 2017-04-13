import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import list from './list'
import activeItem from './activeItem'


const rootReducer = combineReducers({
  router: routerReducer,
  list,
  activeItem,
})

export default rootReducer
