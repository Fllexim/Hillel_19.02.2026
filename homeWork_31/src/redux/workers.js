import { call, put } from "redux-saga/effects";
import { todo } from "./slices/todoSlice";

const API = "https://6a362f5a766b831960f8fc65.mockapi.io/todos";

export function* loadTodosWorker() {
  try {
    const response = yield call(fetch, API);

    const data = yield call([response, response.json]);

    yield put(todo.actions.setTodos(data));
  } catch (error) {
    console.error("Load todos error:", error);
  }
}

export function* addTodoWorker(action) {
  try {
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
  } catch (error) {
    console.error("Add todo error:", error);
  }
}

export function* toggleTodoWorker(action) {
  try {
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
  } catch (error) {
    console.error("Toggle todo error:", error);
  }
}

export function* editTodoWorker(action) {
  try {
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
  } catch (error) {
    console.error("Edit todo error:", error);
  }
}

export function* clearTodosWorker() {
  try {
    const response = yield call(fetch, API);

    const todos = yield call([response, response.json]);

    for (const item of todos) {
      yield call(fetch, `${API}/${item.id}`, {
        method: "DELETE",
      });
    }

    yield put(todo.actions.clearTodos());
  } catch (error) {
    console.error("Clear todos error:", error);
  }
}
