import React, { memo } from 'react';
import heroImage from '~/assets/images/hero_img.jpg';
import c from './Hero.module.scss';

function Hero() {
  return (
    <div className={c.hero}>
      <h1 className={c.heroTitle}>A Lifestyle Blog</h1>
      <p className={c.heroDescription}>Lovely Little Things</p>
      <img src={heroImage} className={c.heroImage} alt='Lovely Little Things' />
    </div>
  );
}

export default memo(Hero);
