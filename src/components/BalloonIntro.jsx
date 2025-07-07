import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../balloonintro.css';
import logo from '../assets/image19.png';       // Top-left logo and watermark
import balloon from '../assets/balloon.png';    // Thumbnail balloon

export default function BalloonIntro() {
  const navigate = useNavigate();

  return (
    <div className="balloon-intro-page">
      {/* Diagonal top bar */}
      <div className="header-bar">
        <div className="blue" />
        <div className="orange" />
      </div>


      {/* Top-left logo */}
      <div
        className="logo-image"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>

      {/* Center watermark */}
      <div
        className="watermark-image"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>

      {/* 🎈 Small thumbnail balloon (image 3 in Figma) */}
      <div
        className="balloon-image"
        style={{ backgroundImage: `url(${balloon})` }}
      ></div>

      {/* 📦 Main white box */}
      <div className="intro-box">
        <div className="intro-title">Balloon Analogue Risk Task</div>
        <div className="intro-description">
          In this task, you will inflate balloons to earn points. Each pump increases your potential earnings, but if the balloon explodes, you lose the points. Balloons can explode at any moment. This game helps assess risk-taking behavior. Try a practice round first.
        </div>
        <div
          className="start-btn"
          onClick={() => navigate('/demo', { state: { totalWinnings: 0 } })}
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
