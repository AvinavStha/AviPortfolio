import React from "react";
import "./intro.css";
import me from "../../img/me.png";

const intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is </h2>
          <h1 className="i-name">Abhinav Lal Shrestha</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Traveller</div>
            </div>
          </div>
          <p className="i-desc">
            I've been programming websites and using various design and
            development services and technologies to create user-friendly
            experiences.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default intro;
