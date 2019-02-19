import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo} from '../actions'

const ShowItems = ({ myState, dispatchAdd }) => {
  return (
    <>
      <button onClick={() => dispatchAdd("salami digar")}>
        click to add 
      </button>
    </>
  )
}

const mapStateToProps = state => ({
  myState: state.todoReduser
}) 

const mapDispatchToProps = dispatch => ({
  dispatchAdd: txt => dispatch(addTodo(txt))
})
export default connect(mapStateToProps, mapDispatchToProps)(ShowItems)