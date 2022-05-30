import { all } from "redux-saga/effects";
import todoWatcherSaga from "./sagaTodo";

export default function* rootSaga() {
  yield all([
    todoWatcherSaga()
  ]);
}
