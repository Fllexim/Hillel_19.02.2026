import { createContext } from "react";

export const themes = {
  white: {
    backgroundColor: "white",
    color: "black",
    borderColor: "black",
  },

  black: {
    backgroundColor: "#121212",
    color: "white",
    borderColor: "white",
  },
};

export const ThemeContext = createContext();
