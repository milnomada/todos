const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      // unmutable state
      // returns a copy of the state object updated
      return Object.assign({}, state, {
        completed: !state.completed
      })

    //case 'CLEAR_TODOS':
      //if (state.id !== action.id) {
      //  return state
      //}

      // unmutable state
      // returns a copy of the state object updated
      
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'CLEAR_TODOS':
      return state.filter(todo => todo.completed === false)

    case 'COUNT_TODOS':
      return state.reduce( (count, todo) => todo.completed ? count + 1 : count,
      0)

    default:
      return state
  }
}

export default todos