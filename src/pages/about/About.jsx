import clsx from 'clsx';
import React, { useEffect } from 'react';

import c from './About.module.scss';

function About() {
  useEffect(() => {
    document.title = `About | ${process.env.REACT_APP_BLOG_NAME}`;
  }, []);

  return (
    <div className={clsx(c.about, 'container')}>
      <h2 className={c.aboutTitle}>About</h2>
      <img
        src='https://static.wixstatic.com/media/f61af8_7c1e4605eefa400e90e8475c04651311~mv2_d_2120_1414_s_2.jpg/v1/fill/w_981,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_7c1e4605eefa400e90e8475c04651311~mv2_d_2120_1414_s_2.jpg'
        className={c.aboutImage}
        alt='Avatar'
      />
      <div className={c.aboutContent}>
        <h3 className={c.aboutWelcome}>Hi! I'm Heather</h3>
        <p className={c.aboutParagraph}>
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I'm a great place for you to tell a
          story and let your users know a little more about you. <br />
          <br />
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.
        </p>
        <div className={c.aboutForm}>
          <h3 className={c.formTitle}>Drop me a line</h3>
          <div className={c.inputContainer}>
            <input type='text' className={c.formInput} placeholder='Name' />
            <input type='text' className={c.formInput} placeholder='Email' />
          </div>
          <textarea
            className={c.formTextarea}
            placeholder='Type your message here...'
          ></textarea>
          <button className={c.formButton}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default About;
