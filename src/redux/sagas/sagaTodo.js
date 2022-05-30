import { takeEvery } from 'redux-saga/effects'
import * as TYPES from '../actionTypes'

export default function* todoWatcherSaga() {
  yield takeEvery(TYPES.FETCH_TODO, fetchTodo);
}

export function* fetchTodo() {
  // const request = yield call(fetch, 'http://localhost:3000/todos')
  // const data = yield call(request, request.json) 
  yield console.log("LOG > data")
}