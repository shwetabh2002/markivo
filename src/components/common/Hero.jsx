import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { HERO_SECTION, BUTTONS } from '../../constants/content';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = HERO_SECTION.ANIMATED_WORDS;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="hero-section">
      <div className="video-container">
        <video
          src="/assets/digi-market.mp4"
          autoPlay
          muted
          loop
          className="cropped-video"
        />
        <div className="navbar-overlay">
          <Navbar />
        </div>
        <div className="content-overlay">
          <div className="overlay-content container">
            <h1 className="hero-title">
              {HERO_SECTION.TITLE.split('Strategic')[0]}
              <span className="text-gradient">
                {words[currentWord]}
              </span>{' '}
              {HERO_SECTION.TITLE.split('Strategic')[1]}
            </h1>
            <p className="hero-subtitle">
              {HERO_SECTION.SUBTITLE}
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">
                {HERO_SECTION.CTA_PRIMARY}
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                {HERO_SECTION.CTA_SECONDARY}
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{HERO_SECTION.STATS.PROJECTS}</span>
                <span className="stat-label">{HERO_SECTION.STATS.PROJECTS_LABEL}</span>
              </div>
              <div className="stat">
                <span className="stat-number">{HERO_SECTION.STATS.CLIENTS}</span>
                <span className="stat-label">{HERO_SECTION.STATS.CLIENTS_LABEL}</span>
              </div>
              <div className="stat">
                <span className="stat-number">{HERO_SECTION.STATS.YEARS}</span>
                <span className="stat-label">{HERO_SECTION.STATS.YEARS_LABEL}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 