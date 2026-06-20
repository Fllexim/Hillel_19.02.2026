import { useEffect } from "react";
import { useDispatch } from "react-redux";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "LOAD_TODOS_REQUEST",
    });
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Redux Saga Todo</h1>

      <TodoForm />

      <TodoList />

      <Footer />
    </div>
  );
}

export default App;
