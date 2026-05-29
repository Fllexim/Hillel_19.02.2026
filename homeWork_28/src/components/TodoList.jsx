import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Todo List</h1>
      <TodoForm addTask={addTask} />

      <ul className="list-group mt-4">
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
