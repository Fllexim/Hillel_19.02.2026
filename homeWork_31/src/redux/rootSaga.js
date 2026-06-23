import { all } from "redux-saga/effects";

import {
  watchLoadTodos,
  watchAddTodo,
  watchToggleTodo,
  watchEditTodo,
  watchClearTodos,
} from "./watchers";

export function* rootSaga() {
  yield all([
    watchLoadTodos(),
    watchAddTodo(),
    watchToggleTodo(),
    watchEditTodo(),
    watchClearTodos(),
  ]);
}
