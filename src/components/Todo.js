import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <li className={ completed && 'completed' } >
    <div className="view">
      { completed && <input className="toggle" onClick={onClick} type="checkbox" defaultChecked/> }
      { !completed && <input className="toggle" onClick={onClick} type="checkbox"/> }
      <label>{text}</label>
      <button className="destroy"></button>
    </div>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo