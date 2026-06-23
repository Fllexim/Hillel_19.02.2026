import { takeEvery } from "redux-saga/effects";

import {
  loadTodosWorker,
  addTodoWorker,
  toggleTodoWorker,
  editTodoWorker,
  clearTodosWorker,
} from "./workers";

export function* watchLoadTodos() {
  yield takeEvery("LOAD_TODOS_REQUEST", loadTodosWorker);
}

export function* watchAddTodo() {
  yield takeEvery("ADD_TODO_REQUEST", addTodoWorker);
}

export function* watchToggleTodo() {
  yield takeEvery("TOGGLE_TODO_REQUEST", toggleTodoWorker);
}

export function* watchEditTodo() {
  yield takeEvery("EDIT_TODO_REQUEST", editTodoWorker);
}

export function* watchClearTodos() {
  yield takeEvery("CLEAR_TODOS_REQUEST", clearTodosWorker);
}
