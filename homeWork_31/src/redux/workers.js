import { call, put } from "redux-saga/effects";
import { todo } from "./slices/todoSlice";

const API = "https://6a362f5a766b831960f8fc65.mockapi.io/todos";

export function* loadTodosWorker() {
  const response = yield call(fetch, API);

  const data = yield call([response, response.json]);

  yield put(todo.actions.setTodos(data));
}

export function* addTodoWorker(action) {
  const response = yield call(fetch, API, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      text: action.payload,
      completed: false,
    }),
  });

  const data = yield call([response, response.json]);

  yield put(todo.actions.addTodo(data));
}

export function* toggleTodoWorker(action) {
  const response = yield call(fetch, `${API}/${action.payload.id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      ...action.payload,
      completed: !action.payload.completed,
    }),
  });

  const data = yield call([response, response.json]);

  yield put(todo.actions.updateTodo(data));
}

export function* editTodoWorker(action) {
  const response = yield call(fetch, `${API}/${action.payload.id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      ...action.payload,
    }),
  });

  const data = yield call([response, response.json]);

  yield put(todo.actions.updateTodo(data));
}

export function* clearTodosWorker() {
  const response = yield call(fetch, API);

  const todos = yield call([response, response.json]);

  for (const item of todos) {
    yield call(fetch, `${API}/${item.id}`, {
      method: "DELETE",
    });
  }

  yield put(todo.actions.clearTodos());
}
