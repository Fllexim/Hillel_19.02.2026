import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch({
      type: "ADD_TODO_REQUEST",
      payload: text,
    });

    setText("");
  };

  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        className="form-control"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
