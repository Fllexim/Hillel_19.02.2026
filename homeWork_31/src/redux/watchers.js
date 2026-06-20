import { takeEvery } from "redux-saga/effects";

import {
  loadTodosWorker,
  addTodoWorker,
  toggleTodoWorker,
  editTodoWorker,
  clearTodosWorker,
} from "./workers";

export function* watchTodos() {
  yield takeEvery("LOAD_TODOS_REQUEST", loadTodosWorker);

  yield takeEvery("ADD_TODO_REQUEST", addTodoWorker);

  yield takeEvery("TOGGLE_TODO_REQUEST", toggleTodoWorker);

  yield takeEvery("EDIT_TODO_REQUEST", editTodoWorker);

  yield takeEvery("CLEAR_TODOS_REQUEST", clearTodosWorker);
}
