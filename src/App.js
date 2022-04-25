import React, { createContext, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './layouts/navbar/NavBar';
import Footer from './layouts/footer/Footer';
import ScrollTop from './components/scroll_top/ScrollTop';

import { categoryList } from './assets/fake_data/category';
import Loading from './components/loading/Loading';

const Home = React.lazy(() => import('./pages/home/Home'));
const About = React.lazy(() => import('./pages/about/About'));
const AllPost = React.lazy(() => import('./pages/all_post/AllPost'));
const PostDetail = React.lazy(() => import('./pages/post_detail/PostDetail'));
const NotFound = React.lazy(() => import('./pages/not_found/NotFound'));
const Category = React.lazy(() => import('./pages/category/Category'));

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
      <div className='main'>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/post' element={<AllPost />} />
            <Route path='/post/:slug' element={<PostDetail />} />
            <Route path='/:slug' element={<Category />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <ScrollTop />
    </CategoryContext.Provider>
  );
}

export default App;
