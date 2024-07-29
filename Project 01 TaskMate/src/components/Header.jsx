import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Header = ({ children, theme, setTheme }) => {
  document.documentElement.classList.add(theme);

  return (
    <header>
      <span className="logo">
        <h1>Todo List </h1>
      </span>
      <span className="themeSelector">
        <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
        <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
        <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
        <span className={theme === "gOne" ? "gOne activeTheme" : "gOne"} onClick={() => setTheme("gOne")}></span>
        <span className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"} onClick={() => setTheme("gTwo")}></span>
        <span className={theme === "gThree" ? "gThree activeTheme" : "gThree"}onClick={() => setTheme("gThree")}></span>
      </span>
    </header>
  );
};

export default Header;
