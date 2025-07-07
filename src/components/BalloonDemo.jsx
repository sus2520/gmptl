// BalloonDemo.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../balloondemo.css'; // ✅ Use the correct CSS filename

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
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
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

      {/* White box container */}
      <div className="balloon-box">
        <div className="balloon-number">Balloon number: 1 of 30</div>
        <div className="potential-earnings">Potential earnings: £0.00</div>
        <div className="number-of-pumps">Number of pumps: 0</div>
        <div className="total-winnings">
          Total Winnings: £{totalWinnings.toFixed(2)}
        </div>

        {/* Balloon image thumbnail */}
        <div
          className="balloon-image"
          style={{ backgroundImage: `url(${balloonImg})` }}
        ></div>

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
    </div>
  );
}
