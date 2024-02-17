import React, { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import "./App.css";

const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
