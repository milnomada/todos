import { connect } from 'react-redux'
import { clearTodos, countTodos } from '../actions'
import Button from '../components/Button'


const mapStateToProps = (state, ownProps) => {
  return {
    active: countTodos() > 0
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(clearTodos())
    }
  }
}

const ButtonLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default ButtonLink