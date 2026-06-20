import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todo = createSlice({
  name: "todo",

  initialState,

  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },

    addTodo(state, action) {
      state.todos.push(action.payload);
    },

    updateTodo(state, action) {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },

    clearTodos(state) {
      state.todos = [];
    },
  },
});
