import { useState } from "react";
import { useDispatch } from "react-redux";
import { todo } from "../redux/slices/todoSlice";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch(todo.actions.addTodo(text));

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button type="submit">Додати</button>
    </form>
  );
};

export default TodoForm;
