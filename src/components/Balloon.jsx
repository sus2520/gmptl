// src/pages/Balloon.jsx
import React from 'react';
import '../balloon.css'; // Ensure this file matches your latest styles
import logo from '../assets/image19.png';
import balloonImage from '../assets/image-upscaled.png'; // Replace with actual path

export default function Balloon() {
  return (
    <div className="balloon-page">
      {/* 🔷 Diagonal Header */}
      <div className="header-bar"></div>

      {/* 🔶 Watermark background image */}
      <div
        className="welcome-bg-image"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>

      {/* 🔷 Logo */}
      <div
        className="welcome-logo"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>

      {/* 🔷 Balloon Box */}
      <div className="balloon-box">
        {/* 🟠 Left Balloon Image */}
        <div
          className="balloon-graphic"
          style={{ backgroundImage: `url(${balloonImage})` }}
        ></div>

        {/* 🟠 Balloon Info Texts */}
        <div className="balloon-text balloon-number">
          Balloon number: 1 of 30
        </div>
        <div className="balloon-text potential">
          Potential earnings: £0.00
        </div>
        <div className="balloon-text pumps">
          Number of pumps: 0
        </div>
        <div className="balloon-text winnings">
          Total Winnings: £0.00
        </div>

        {/* 🔵 Action Buttons */}
        <div className="balloon-button-group">
          <div className="btn balloon-pump">Pump up the balloon</div>
          <div className="btn balloon-collect">Collect £££</div>
        </div>
      </div>
    </div>
  );
}
