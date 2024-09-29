import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/image1.jpeg'; 

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2 className="about-title">
          Welcome To <span>Counterspell</span>
        </h2>
        <p className="about-description">
        Counterspell is a fun game jam for high school students happening in Kigali! This exciting event will bring together <span>artists, musicians, and coders </span>to create games and apps. You can build anything you want! Before the event starts, participants will vote on a theme for the games. Whether you're new to programming or have some experience, we will have workshops, helpful resources, and mentors available for 12 hours to support you with your projects.
        </p>
      </div>
      <div className="about-image-container">
        <img className="about-image" src={aboutImage} alt="About Counterspell" />
      </div>
    </div>
  );
};

export default About;
