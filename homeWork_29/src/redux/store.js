import { configureStore } from "@reduxjs/toolkit";
import { counter } from "./slices/counterSlices";

export const store = configureStore({
  reducer: {
    counter: counter.reducer,
  },
});
