import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import c from './NotFound.module.scss';
import notFoundImage from '../../assets/images/notfound.png';
import clsx from 'clsx';

function NotFound() {
  useEffect(() => {
    document.title = `Page Not Found | ${process.env.REACT_APP_BLOG_NAME}`;
  }, []);

  return (
    <div className={clsx(c.notFound, 'container')}>
      <div className={c.notFoundContent}>
        <h2 className={c.notFoundTitle}>I have bad news for you</h2>
        <p className={c.notFoundDescription}>
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <Link className={c.notFoundButton} to={'/'}>
          Come Home
        </Link>
      </div>
      <div className={c.notFoundImageBox}>
        <img src={notFoundImage} alt='Not Found' className={c.notFoundImage} />
      </div>
    </div>
  );
}

export default NotFound;
