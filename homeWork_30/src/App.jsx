import SwapiForm from "./components/SwapiForm";
import SwapiResult from "./components/SwapiResult";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-3">Swapi</h1>
      <SwapiForm />
      <SwapiResult />
      <Footer />
    </div>
  );
}

export default App;
