import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../containers/todo/todoSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga' 

const reducer = {
  todoReducer
}

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({ 
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)