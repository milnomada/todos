import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick }) => {

  return (
    <button className="clear-completed" onClick={e => {
        e.preventDefault()
        onClick()
       }}>Clear completed
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button