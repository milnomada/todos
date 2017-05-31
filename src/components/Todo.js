import React from 'react'
import PropTypes from 'prop-types'

const Todo = (props) => (

  <li className={ props.completed && 'completed' } >

    <div className="view">
      { props.completed && <input className="toggle" onClick={props.onClick} type="checkbox" defaultChecked/> }
      { !props.completed && <input className="toggle" onClick={props.onClick} type="checkbox"/> }
      <label>{props.text}</label>
      <button className="destroy" onClick={(e)=>props.removeClick(e) }></button>
    </div>
  </li>
)

Todo.propTypes = {
  props : PropTypes.object.isRequired,
}

export default Todo