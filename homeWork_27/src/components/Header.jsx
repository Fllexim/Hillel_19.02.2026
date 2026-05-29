import { useContext } from "react";

import Link from "./Link";
import ChangeThemeButton from "./ChangeThemeButton";

import { ThemeContext } from "../themeContext";

const Header = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <header
      className="header"
      style={{
        borderBottom: `2px solid ${theme.borderColor}`,
      }}
    >
      <div className="left-side">
        <h1>React - route</h1>

        <ul className="header-nav">
          <li>
            <Link href="/">Головна</Link>
          </li>

          <li>
            <Link href="/contacts">Контакти</Link>
          </li>

          <li>
            <Link href="/about">Про мене</Link>
          </li>
        </ul>
      </div>

      <ChangeThemeButton />
    </header>
  );
};

export default Header;
