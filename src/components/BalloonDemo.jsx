// BalloonDemo.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../balloondemo.css';

import logo from '../assets/image19.png';
import watermark from '../assets/watermark.png';
import balloonImg from '../assets/balloon.png';

export default function BalloonDemo() {
  const navigate = useNavigate();
  const location = useLocation();
  const totalWinnings = location.state?.totalWinnings || 0;

  return (
    <div className="balloondemo-page">
      {/* Diagonal header with orange and blue bars */}
      <div className="header-bar">
        <div className="blue" />
        <div className="orange" />
      </div>

      {/* Watermark background image */}
      <div
        className="watermark-image"
        style={{ backgroundImage: `url(${watermark})` }}
      ></div>

      {/* Logo at top-left */}
      <div
        className="logo-image"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>

      {/* Grouped balloon + stats */}
      <div className="balloon-info-wrapper">
        <div
          className="balloon-image"
          style={{ backgroundImage: `url(${balloonImg})` }}
        ></div>
        <div className="balloon-number">Balloon #: 5</div>
        <div className="potential-earnings">Potential: $0.25</div>
        <div className="number-of-pumps">Pumps: 3</div>
        <div className="total-winnings">Total: ${totalWinnings}</div>
      </div>

      {/* Buttons */}
      <div className="button-row">
        <button className="pump-button">Pump up the balloon</button>
        <button
          className="collect-button"
          onClick={() => navigate('/activities')}
        >
          Collect £££
        </button>
      </div>
    </div>
  );
}
