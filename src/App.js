import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./layouts/navbar/NavBar";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AllPost from "./pages/all_post/AllPost";
import ScrollTop from "./components/scroll_top/ScrollTop";
import { categoryList } from "./assets/fake_data/category";

export const CategoryContext = createContext();

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = () => {
      const result = categoryList;
      setCategories(result);
    };
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={categories}>
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
    </CategoryContext.Provider>
  );
}

export default App;
