import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { TodoCreate, TodoList } from "../../components"
// import { fetchTodos } from "../../services/getTodos/getTodos"
import * as ACTIONS from "../../redux/actionCreaters"

function Todo() {

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(ACTIONS.fetchTodo())
    console.log("LOG > dispatch(ACTIONS.fetchTodo())", dispatch(ACTIONS.fetchTodo()))
  },)

  return (
    <>
      <TodoList />
      <TodoCreate />
    </>
  )
}

export default Todo
