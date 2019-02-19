import { combineReducers } from 'redux';
import todoReduser from './todos'
import visiblitiReducer from './visiblityReducer'

export default combineReducers({
  todoReduser,
  visiblitiReducer
})