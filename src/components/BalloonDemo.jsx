import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../balloon.css';
import logo from '../assets/image19.png';
import watermark from '../assets/watermark.png';

export default function BalloonDemo() {
  const navigate = useNavigate();
  const location = useLocation();
  const totalWinnings = location.state?.totalWinnings || 0;

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
          <h2>Game Results</h2>
          <p>Congratulations! You have completed the Balloon Analogue Risk Task.</p>
          <p>Your total earnings: ${totalWinnings.toFixed(2)}</p>
          <div
            className="btn balloon-collect"
            onClick={() => navigate('/activities')}
            aria-label="Return to Activities"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/activities')}
          >
            Return to Activities
          </div>
        </div>
      </div>
    </div>
  );
}