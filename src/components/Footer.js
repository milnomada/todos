import React from 'react'
import { connect } from 'react-redux'

import FilterLink from '../containers/FilterLink'
import ButtonLink from '../containers/ButtonLink'

// export default class Footer extends Component {

const mapStateToProps = state => {
  return { todos: state.todos }
}

const mapDispatchToProps = dispatch => {
  return {
    destroyTodo : () => dispatch({
      type : 'DESTROY_TODO'
    })
  }
}

const Footer = (state, dispatch) => (
  <footer className="footer">
    <span className="todo-count"><strong>{ state.todos.reduce((p,c) => c.completed ? p : p +1, 0) }</strong> item left</span>
    <ul className="filters">
      <li>
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
      </li>
      <li>
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
      </li>
      <li>
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </li>
    </ul>
    <ButtonLink />
  </footer>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)