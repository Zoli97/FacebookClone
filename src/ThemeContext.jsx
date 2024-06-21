import React, { createContext, useState, useContext } from "react";

//I create a ThemeContext using createContext from React.
const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

//define a ThemeProvider component that wraps its children with the context provider.
export const ThemeProvider = ({ children }) => {
  //I manage the current theme with the useState hook
  const [theme, setTheme] = useState("light");

  //provide a toggleTheme function to toggle between ‘light’ and ‘dark’ themes.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
