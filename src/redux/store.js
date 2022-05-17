import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../containers/todo/todoSlice'

const reducer = {
  todoReducer
}

export const store = configureStore({ 
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})