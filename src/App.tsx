import React, { ReactElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

toast.configure();

const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default App;
