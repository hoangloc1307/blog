import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./layouts/navbar/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./layouts/footer/Footer";
import GoToTop from "./components/go_to_top/GoToTop";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <GoToTop />
    </>
  );
}

export default App;
