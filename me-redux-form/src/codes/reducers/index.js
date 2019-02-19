import { combineReducers } from 'redux';
import todoReduser from './todos'
import visiblitiReducer from './visiblityReducer'
import fetchUserReducer from './fetchUsers'

export default combineReducers({
  todoReduser,
  visiblitiReducer,
  fetchUserReducer
})