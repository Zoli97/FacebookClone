"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _theme = require("./theme.js");

var _chat = require("./chat.js");

var my_store = (0, _toolkit.configureStore)({
  reducer: {
    my_theme_mode: _theme.themeSlice.reducer,
    chat: _chat.chatSlice.reducer
  }
});
var _default = my_store;
exports["default"] = _default;