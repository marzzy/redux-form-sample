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