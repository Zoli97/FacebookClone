// import React, { useState, useEffect, createContext } from "react";
// //at allow me to define diff colors for light and dark themes
// export const my_themes = {
//   light: {
//     backgroundColor: "#ffffff",
//     foregroundColor: "#000",
//   },
//   dark: {
//     backgroundColor: "#ffffff",
//     foregroundColor: "#18191A",
//   },
// };

// //* initial state object this is the initial state of the app when the user lands on the page the theme is white.

// const initialState = {
//   dark: false,
//   my_theme: my_themes.light,
// };

// //* this is my context
// const MyThemeContext = createContext(initialState);

// //** create the provider
// //** Then, let’s create a method which wraps all children with ThemeContext.Provider component and export this method and the actual ThemeContext object that we created just before.

// const ThemeProvider = ({ children }) => {
//   //* use useState to set the default theme
//   const [dark, setDark] = useState(false);

//   //** toggle between light and dark mode

//   //filter the styles based on the theme selcted
//   const my_theme = dark ? my_themes.dark : my_themes.light;

//   //* this is the value prop and everything i passed to the value prop will be accesible to all its children.
//   return (
//     <MyThemeContext.Provider value={{ my_theme, dark }}>
//       {children}
//     </MyThemeContext.Provider>
//   );
// };

// export { MyThemeContext, ThemeProvider };
