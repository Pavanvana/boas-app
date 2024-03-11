import React, { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

toast.configure();

const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
