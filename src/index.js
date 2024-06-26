import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./context/StateProvider.js";
import reducer, { initialState } from "./context/reducer.js";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

//*  wrap the App component with our ThemeProvider. So that the theme state can be shared with all the children available within App component.The modified index.js look like:
root.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
