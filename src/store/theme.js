import { createSlice } from "@reduxjs/toolkit";

///in this object i have actions, for setting the dark bg so when i toggle to dark mode i want to have the ex the foreground color to white;
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
