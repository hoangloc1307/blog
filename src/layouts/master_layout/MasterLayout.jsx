import React from 'react';
import c from './MasterLayout.module.scss';
import { Outlet } from 'react-router-dom';
import ScrollTop from '../scroll_top/ScrollTop';
import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';

function MasterLayout() {
  return (
    <>
      <NavBar />
      <div className={c.main}>
        <Outlet />
      </div>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default MasterLayout;
