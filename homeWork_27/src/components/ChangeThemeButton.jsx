import { useContext } from "react";
import { ThemeContext, themes } from "../themeContext";

const ChangeThemeButton = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === themes.white ? themes.black : themes.white);
  };

  return (
    <button className="btn-theme" onClick={handleClick}>
      Change theme
    </button>
  );
};

export default ChangeThemeButton;
