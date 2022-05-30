import * as TYPES from './actionTypes'
import { createAction } from '@reduxjs/toolkit'

export const fetchTodo = createAction(TYPES.FETCH_TODO);