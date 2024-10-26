import React from 'react';
import '../styles/Hero.css';
const HeroSection = () => {
  return (
    <div className="hero-section">
      <a href="https://hackclub.com/">
        <img className="logo" src="https://assets.hackclub.com/banners/2024.svg" alt="Hack Club" />
      </a>
      <div className="hero-content">
        <h1 className="hero-title">Counterspell Kigali</h1>
        <p className="hero-subtitle">A beginner-friendly game jam for high schoolers in Kigali!</p>
        <div className="hero-buttons">
          <a href="https://lu.ma/za3el7cd" target="_blank" rel="noreferrer">
            <button className="btn primary-btn">Register Now</button>
          </a>
          <a href="https://hcb.hackclub.com/donations/start/counterspell-kigali-city" target="_blank" rel="noreferrer">
            <button className="btn secondary-btn">Donate</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
