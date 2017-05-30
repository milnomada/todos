import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    
      <header className="header">
        <h1>todos</h1>
        <input ref={node => {
            input = node
          }}  className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={e => {
          if (e.keyCode == 13) {  
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }
        }}/>
      </header>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo