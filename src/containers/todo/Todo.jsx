import { useEffect } from "react"
import { TodoCreate, TodoList } from "../../components"
import { fetchTodos } from "../../services/getTodos/getTodos"

function Todo() {

  useEffect(() =>{
    fetchTodos('/todos')
      .then((dd) => console.log(dd))
  }, [])

  return (
    <>
      <TodoList />
      <TodoCreate />
    </>
  )
}

export default Todo
