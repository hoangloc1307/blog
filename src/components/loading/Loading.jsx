import React from 'react';
import loadingImg from '../../assets/images/loading.gif';
import c from './Loading.module.scss';

function Loading() {
  return (
    <div className={c.loading}>
      <img className={c.loadingImage} src={loadingImg} alt='Loading...' />
    </div>
  );
}

export default Loading;
