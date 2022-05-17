import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  todos: {arr: 0} 
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos = action.payload
    },
  },
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer