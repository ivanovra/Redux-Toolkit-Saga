import React from 'react'
import { createSelector } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'



function TodoList() {

  const selectTodo = createSelector(
    state => state.todoReducer.todos,
    todos => todos
  )
  
  const abc = useSelector(selectTodo)
  console.log("LOG > abc", abc)

  return (
    <div>
      <span></span>
      <span></span>
    </div>
  )
}

export default TodoList