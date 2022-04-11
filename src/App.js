import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./layouts/navbar/NavBar";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AllPost from "./pages/all_post/AllPost";
import ScrollTop from "./components/scroll_top/ScrollTop";

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<AllPost />} />
        </Routes>
      </div>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
