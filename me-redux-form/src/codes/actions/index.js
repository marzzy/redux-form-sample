// import fetch from 'cross-fetch'
import 'babel-polyfill'

let idCounter = 100;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  text,
  id: idCounter++
});

export const toggleTodo = (id) => ({
  type: "TOGGLE",
  id
});

export const visiblityFilter = (filter) => ({
  type: "VISIBLITY_FILTER",
  filter,
});

export const visiblityFilters = ({
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  ACTIVE: "ACTIVE"
});


export const REQUEST_USER = 'REQUEST_USER'
export function requestUser (userName) {
  return{
    type: 'REQUEST_USER',
    userName,
  }
}

export const RESIVE_USER = 'RESIVE_USER'
export function resiveUser(userName,thejson) {
  return {
    type: 'RESIVE_USER',
    userName,
    userData: thejson,
    receivedAt: Date.now()
  }
}