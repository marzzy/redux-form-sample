import { REQUEST_USER, RESIVE_USER } from '../actions'

const fetchUserReducer = (state = { isFetched: false, items:{},name: '' },action) => {
  if ( action.type === REQUEST_USER ) {
    return Object.assign({}, state, {
      isFetched: false,
      name: action.userName
    });
  } else if ( action.type === RESIVE_USER ){
    return Object.assign({},state,{
      isFetched: true,
      name: action.userName,
      items: action.post
    });
  } else {
    return state
  }
}

export default fetchUserReducer
