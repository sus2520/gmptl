import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../balloonintro.css';
import logo from '../assets/image19.png';       // Using the same logo path as your code
import balloon from '../assets/balloon.png';    // Using the same balloon path as your code

export default function GameIntro() {
  const navigate = useNavigate();

  return (
    <div className="balloon-intro-page">
      {/* Diagonal top bar */}
      <div className="header-bar">
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
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

      {/* Small thumbnail balloon */}
      <div
        className="balloon-image"
        style={{ backgroundImage: `url(${balloon})` }}
      ></div>

      {/* Main white box */}
      <div className="intro-box">
        <div className="intro-title">My Awesome Game</div>
        <div className="intro-description">
          In this game, you will face exciting challenges to earn rewards. Each action increases your score, but beware of unexpected twists that could reset your progress. This game tests your strategy and luck. Try a practice round to get started!
        </div>
        <div
          className="start-btn"
          onClick={() => navigate('/game')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/game')}
        >
          Practice
        </div>
      </div>
    </div>
  );
}