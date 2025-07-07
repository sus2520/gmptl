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
        aria-hidden="true" // Watermark is decorative, so hide from screen readers
      ></div>

      {/* Small thumbnail balloon */}
      <img
        src={balloon}
        alt="Balloon Thumbnail"
        className="balloon-image"
      />

      {/* Main white box */}
      <div className="intro-box">
        <h1 className="intro-title">Balloon Analogue Risk Task</h1>
        <p className="intro-description">
          In this task, you will inflate balloons to earn points. Each pump increases your potential earnings, but if the balloon explodes, you lose the points. Balloons can explode at any moment. This game helps assess risk-taking behavior. Try a practice round first.
        </p>
        <button
          className="start-btn"
          onClick={handleStartPractice}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
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