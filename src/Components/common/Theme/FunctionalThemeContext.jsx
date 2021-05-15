import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionalThemeContext() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: darkTheme ? "red" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Functional Theme</div>
      <div style={themeStyles}>Second Theme</div>
    </>
  );
}
