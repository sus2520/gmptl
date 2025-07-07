import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../balloonintro.css';
import logo from '../assets/image19.png';
import watermark from '../assets/image19.png'; // Assuming watermark is the faded version
import balloon from '../assets/balloon.png';

export default function BalloonIntro() {
  const navigate = useNavigate();

  return (
    <div className="balloon-intro-page">
      <div className="header-bar">
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>

      <div
        className="logo-image"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>

      <div
        className="watermark-image"
        style={{ backgroundImage: `url(${watermark})` }}
      ></div>

      <div className="intro-box">
        <div className="intro-title">Balloon Analogue Risk Task</div>
        <div className="intro-description">
          In this task, you will inflate balloons to earn points. Each pump increases your potential earnings, but if the balloon explodes, you lose the points. Balloons can explode at any moment. This game helps assess risk-taking behavior. Try a practice round first.
        </div>

        <div
          className="balloon-image"
          style={{ backgroundImage: `url(${balloon})` }}
        ></div>

        <div
          className="start-button"
          onClick={() => navigate('/balloon')}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => e.key === 'Enter' && navigate('/balloon')}
        >
          Practice
        </div>
      </div>
    </div>
  );
}
