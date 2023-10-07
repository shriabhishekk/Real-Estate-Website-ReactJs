import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div className="section g-wrapper">
      <div className="g-container paddings innerWidth">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">Subscribe and find super attractive price quotes from us.
          <br />
          Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:abhishek.choudhaary@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
