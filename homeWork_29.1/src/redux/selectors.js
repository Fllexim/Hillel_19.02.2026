export default {
  todo: {
    todos: (state) => state.todo.todos,
    count: (state) => state.todo.todos.length,
  },
};