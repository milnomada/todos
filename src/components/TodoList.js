import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ( { todos , actions}) => (
  <section className="main">

    <input className="toggle-all" type="checkbox"/>
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {todos && todos.map(todo =>
        <Todo
          key={todo.id}
          onClick={() => actions.onTodoClick(todo.id)}
          removeClick={() => actions.onTodoDestroyClick(todo.id)}
          {...todo}
        />
      )}
    </ul>
  </section>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default TodoList