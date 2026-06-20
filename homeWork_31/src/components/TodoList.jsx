import { useDispatch, useSelector } from "react-redux";
import selectors from "../redux/selectors";

const TodoList = () => {
  const todos = useSelector(selectors.todo.todos);

  const dispatch = useDispatch();

  const handleEdit = (todo) => {
    const newText = prompt("Edit todo:", todo.text);

    if (!newText) return;

    dispatch({
      type: "EDIT_TODO_REQUEST",
      payload: {
        ...todo,
        text: newText,
      },
    });
  };

  return (
    <div className="list-group">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div className="d-flex align-items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                dispatch({
                  type: "TOGGLE_TODO_REQUEST",
                  payload: todo,
                })
              }
            />

            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
          </div>

          <button
            className="btn btn-secondary "
            onClick={() => handleEdit(todo)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
