import React, { createContext, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { categoryList } from './assets/fake_data/category';
import Loading from './components/loading/Loading';
import MasterLayout from './layouts/master_layout/MasterLayout';

const Home = React.lazy(() => import('./pages/home/Home'));
const About = React.lazy(() => import('./pages/about/About'));
const AllPost = React.lazy(() => import('./pages/all_post/AllPost'));
const PostDetail = React.lazy(() => import('./pages/post_detail/PostDetail'));
const NotFound = React.lazy(() => import('./pages/not_found/NotFound'));
const Category = React.lazy(() => import('./pages/category/Category'));
const PostLayout = React.lazy(() => import('./layouts/post_layout/PostLayout'));

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
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<MasterLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/post' element={<PostLayout />}>
              <Route index element={<AllPost />} />
              <Route path='/post/:slug' element={<PostDetail />} />
            </Route>
            <Route path='/:slug' element={<Category />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </CategoryContext.Provider>
  );
}

export default App;
