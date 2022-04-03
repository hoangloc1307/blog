import React from "react";

import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="container">
        <h2 className="about__title">About</h2>
        <img
          src="https://static.wixstatic.com/media/f61af8_7c1e4605eefa400e90e8475c04651311~mv2_d_2120_1414_s_2.jpg/v1/fill/w_981,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_7c1e4605eefa400e90e8475c04651311~mv2_d_2120_1414_s_2.jpg"
          className="about__image"
          alt="Avatar"
        />
        <div className="about__content">
          <h3 className="about__welcome">Hi! I'm Heather</h3>
          <p className="about__paragraph">
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I'm a great place for you to tell a
            story and let your users know a little more about you. <br />
            <br />
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide. Tell your visitors the story of how you came up with the
            idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
          <div className="about__form">
            <h3 className="form__title">Drop me a line</h3>
            <div className="input__container">
              <input type="text" className="form__input" placeholder="Name" />
              <input type="text" className="form__input" placeholder="Email" />
            </div>
            <textarea
              className="form__textarea"
              placeholder="Type your message here..."
            ></textarea>
            <button className="form__button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
