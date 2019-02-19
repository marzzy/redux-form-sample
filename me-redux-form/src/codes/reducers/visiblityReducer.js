import { visiblityFilters } from '../actions'

const visiblitiReducer = (state = visiblityFilters.ALL ,action) => {
  if (action.type === 'VISIBLITY_FILTER') {
    return action.filter
  }  else {
    return state
  }
}

export default visiblitiReducer