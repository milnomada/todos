/*
  - Action creators are exactly that—functions that create actions. 
  - Actions describe the fact that something happened, 
    but don't specify how the application's state changes in response

 */
let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
} 

export const clearTodos = () => {
  return {
    type: 'CLEAR_TODOS'
  }
}

export const countTodos = () => {
  return {
    type: 'COUNT_TODOS'
  }
}