import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../balloon.css';
import logo from '../assets/image19.png';
import watermark from '../assets/watermark.png';

export default function BalloonIntro() {
  const navigate = useNavigate();

  return (
    <div className="balloon-page">
      <div className="header-bar"></div>
      <div
        className="welcome-bg-image"
        style={{ backgroundImage: `url(${watermark})` }}
      ></div>
      <div
        className="welcome-logo"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <div className="balloon-box">
        <div className="balloon-text">
          <h2>Balloon Analogue Risk Task</h2>
          <h3>Game Rules</h3>
          <ul>
            <li>You will play with 30 balloons, one at a time.</li>
            <li>Each pump inflates the balloon and adds $0.05 to your temporary bank.</li>
            <li>Each balloon has a random explosion point.</li>
            <li>If you pump too much and the balloon bursts, you lose the temporary bank for that balloon.</li>
            <li>You can collect the temporary bank at any time to add it to your permanent total and move to the next balloon.</li>
            <li>After all 30 balloons, your total earnings will be displayed.</li>
          </ul>
          <div
            className="btn balloon-pump"
            onClick={() => navigate('/balloon')}
            aria-label="Start Game"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/balloon')}
          >
            Start Game
          </div>
        </div>
      </div>
    </div>
  );
}