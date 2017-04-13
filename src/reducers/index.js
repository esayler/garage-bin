import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import list from './list'
import activeItem from './activeItem'
import sort from './sort'


const rootReducer = combineReducers({
  router: routerReducer,
  list,
  activeItem,
  sort,
})

export default rootReducer
