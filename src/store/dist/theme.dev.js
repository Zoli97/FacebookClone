"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.themeActions = exports.themeSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

///in this object i have actions, for setting the dark bg so when i toggle to dark mode i want to have the ex the foreground color to white;
var themeSlice = (0, _toolkit.createSlice)({
  name: "theme",
  initialState: {
    theme: "light"
  },
  reducers: {
    toggleTheme: function toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  }
});
exports.themeSlice = themeSlice;
var themeActions = themeSlice.actions;
exports.themeActions = themeActions;
var _default = themeSlice;
exports["default"] = _default;