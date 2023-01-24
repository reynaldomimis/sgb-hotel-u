import React from "react";
import CAbout from "../../components/cabout/CAbout";
import "./about.scss";

const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <div className="ca-left">
          <span className="c-about">About Us</span>
          <div className="ca-overlay">
            <div className="h-row">
              <span className="h-why">Why Soto </span>
              <span className="h-why">Grande Baguio?</span>
            </div>
          </div>
        </div>
        <CAbout />
      </div>
    </>
  );
};

export default About;
