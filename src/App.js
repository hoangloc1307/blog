import React, { createContext, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./layouts/navbar/NavBar";
import Footer from "./layouts/footer/Footer";
import ScrollTop from "./components/scroll_top/ScrollTop";

import { categoryList } from "./assets/fake_data/category";

const Home = React.lazy(() => import("./pages/home/Home"));
const About = React.lazy(() => import("./pages/about/About"));
const AllPost = React.lazy(() => import("./pages/all_post/AllPost"));
const PostDetail = React.lazy(() => import("./pages/post_detail/PostDetail"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post" element={<AllPost />} />
            <Route path="/post/:slug" element={<PostDetail />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <ScrollTop />
    </CategoryContext.Provider>
  );
}

export default App;
