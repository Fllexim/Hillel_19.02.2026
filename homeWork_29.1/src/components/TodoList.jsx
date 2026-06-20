import { useSelector } from "react-redux";
import selectors from "../redux/selectors";

const TodoList = () => {
  const todos = useSelector(selectors.todo.todos);

  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <div className="todo-item" key={index}>
          {todo}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
