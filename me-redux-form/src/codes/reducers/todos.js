const todoReduser = (state = [] ,action) => {
  if (action.type === 'ADD_TODO') {
    return [...state,{
      id: action.id,
      text: action.text,
      completed: false
    }];
  } else if (action.type === 'TOGGLE') {
    return state.map(
      item => (item.id === action.id) ? {...item,completed : !item.completed} : (item)
    );
  } else {
    return state
  }
}

export default todoReduser