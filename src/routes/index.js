import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import CSS from "../containers/css";
import Home from "../containers/home";
import HTML from "../containers/html";

const AppRoutes = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/html" element={<HTML />} />
        <Route exact path="/css" element={<CSS />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
