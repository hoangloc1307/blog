import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./layouts/navbar/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./layouts/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
