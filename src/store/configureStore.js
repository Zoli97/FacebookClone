import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./theme.js";
import { chatSlice } from "./chat.js";
const my_store = configureStore({
  reducer: {
    // my_theme_mode: themeSlice.reducer,
    chat: chatSlice.reducer,
  },
});

export default my_store;
