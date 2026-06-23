import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Swapi from "./pages/Swapi";

import { Container, Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Header />

      <Container sx={{ mt: 4, minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/swapi" element={<Swapi />} />
        </Routes>
      </Container>

      <Footer />
    </Box>
  );
}

export default App;