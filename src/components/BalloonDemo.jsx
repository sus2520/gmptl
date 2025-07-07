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
      <div className="header-bar"></div>
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

      {/* Main white box container */}
      <div className="balloon-box">
        {/* Balloon image */}
        <div
          className="balloon-image"
          style={{ backgroundImage: `url(${balloonImg})` }}
        ></div>

        {/* Balloon info wrapper */}
        <div className="balloon-info-wrapper">
          <div className="balloon-number">Balloon number: 1 of 30</div>
          <div className="potential-earnings">Potential earnings: £0.00</div>
          <div className="number-of-pumps">Number of pumps: 0</div>
          <div className="total-winnings">Total Winnings: £0.00</div>
        </div>
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