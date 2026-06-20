import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>TODO</h1>
      <TodoForm />
      <h2>TODOS</h2>
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
