import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../balloonintro.css';
import logo from '../assets/image19.png'; // Top-left logo and watermark
import balloon from '../assets/balloon.png'; // Thumbnail balloon

export default function BalloonIntro() {
  const navigate = useNavigate();

  const handleStartPractice = () => {
    navigate('/demo', { state: { totalWinnings: 0 } });
  };

  return (
    <div className="balloon-intro-page">
      {/* Diagonal Top Bar */}
      <div className="header-bar">
        <div className="blue"></div>
        <div className="orange"></div>
      </div>

      {/* Top-left logo */}
      <img
        src={logo}
        alt="Application Logo"
        className="logo-image"
      />

      {/* Center watermark */}
      <div
        className="watermark-image"
        style={{ backgroundImage: `url(${logo})` }}
        aria-hidden="true" // Watermark is decorative
      ></div>

      {/* Small thumbnail balloon */}
      <img
        src={balloon}
        alt="Balloon Thumbnail"
        className="balloon-image"
      />

      {/* Main white box */}
      <div className="intro-box">
        <h1 className="intro-title">
          Balloon Analogue<br />Risk Task
        </h1>
        <p className="intro-description">
          Ready to test your risk-taking skills? Pump balloons to rack up points, but beware—each pump could make them pop! The bigger the balloon, the higher the reward, but one wrong move could cost you everything. Dive into this exciting challenge to see how bold you can be. Start with a practice round now!
        </p>
        <button
          className="start-btn"
          onClick={handleStartPractice}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleStartPractice();
            }
          }}
        >
          Practice
        </button>
      </div>
    </div>
  );
}