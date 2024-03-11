import React from "react";
import { GlobalHotKeys } from "react-hotkeys";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

import "./i18n";

const keyMap = {
  GLOBAL_SEARCH: ["Ctrl+k", "Ctrl+K"],
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalHotKeys keyMap={keyMap}>
        <App />
      </GlobalHotKeys>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
