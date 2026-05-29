import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./components/Main";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./components/NotFound";
import About from "./components/About";
import { themes, ThemeContext } from "./themeContext";

const App = () => {
  const theme = useState(themes.white);
  const [currentTheme] = theme;

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div
          style={{
            background: currentTheme.backgroundColor,
            color: currentTheme.color,
            minHeight: "100vh",
          }}
        >
          <BrowserRouter>
            <ErrorBoundary>
              <Header />

              <main>
                <Routes>
                  <Route path="*" element={<NotFound />} />
                  <Route path="/" element={<Main />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </main>
            </ErrorBoundary>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
