import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../balloonintro.css';
import logo from '../assets/image19.png'; // Logo & Watermark
import balloon from '../assets/balloon.png'; // Balloon background

export default function BalloonIntro() {
  const navigate = useNavigate();

  return (
    <div className="balloon-intro-page">
      {/* Diagonal header bar */}
      <div className="header-bar">
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>

      {/* Full background balloon */}
      <div
        className="balloon-background-image"
        style={{ backgroundImage: `url(${balloon})` }}
      ></div>

      {/* Watermark center faded */}
      <div
        className="watermark-image"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>

      {/* Logo top-left */}
      <div
        className="logo-image"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>

      {/* Small balloon image (top center) */}
      <div
        className="balloon-image"
        style={{ backgroundImage: `url(${balloon})` }}
      ></div>

      {/* Main box */}
      <div className="intro-box">
        <div className="intro-title">Balloon Analogue Risk Task</div>
        <div className="intro-description">
          In this task, you will inflate balloons to earn points. Each pump increases your potential earnings, but if the balloon explodes, you lose the points. Balloons can explode at any moment. This game helps assess risk-taking behavior. Try a practice round first.
        </div>
        <div
          className="start-btn"
          onClick={() => navigate('/balloon')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/balloon')}
        >
          Practice
        </div>
      </div>
    </div>
  );
}
