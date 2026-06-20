import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});