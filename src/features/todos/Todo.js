import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import deleteTodo from './todosSlice'

// const mapDispatch = { deleteTodo }

const Todo = ({ onClick, completed, text, id, deleteTodo }) => (
  <div>
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
   {id} : {text}
   
  </li>
  <button onClick={deleteTodo}>Delete</button>
  </div>
)


Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired


}

export default Todo

