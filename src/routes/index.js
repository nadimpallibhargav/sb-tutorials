import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import CSS from "../containers/css";
import CssBasics from "../containers/css/Basics.jsx";
import Home from "../containers/home";
import HTML from "../containers/html";
import Basics from "../containers/html/Basics";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/html" element={<HTML />} />
        <Route exact path="/css" element={<CSS />} />
        <Route exact path="/html-basics" element={<Basics />} />
        <Route exact path="/css-basics" element={<CssBasics />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
