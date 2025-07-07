import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../balloondemo.css';
import logo from '../assets/image19.png';
import watermark from '../assets/watermark.png';



export default function BalloonGame() {
  const navigate = useNavigate();
  const [currentBalloon, setCurrentBalloon] = useState(1);
  const [pumps, setPumps] = useState(0);
  const [tempBank, setTempBank] = useState(0);
  const [totalWinnings, setTotalWinnings] = useState(0);
  const [maxPumps, setMaxPumps] = useState(generateMaxPumps(1));
  const [balloonSize, setBalloonSize] = useState(207.18); // Match CSS balloon-image width

  function generateMaxPumps(balloonNumber) {
    if (balloonNumber <= 10) {
      return Math.floor(Math.random() * (30 - 10 + 1)) + 10; // 10 to 30
    } else if (balloonNumber <= 20) {
      return Math.floor(Math.random() * (50 - 15 + 1)) + 15; // 15 to 50
    } else {
      return Math.floor(Math.random() * (30 - 20 + 1)) + 20; // 20 to 30
    }
  }

  const handlePump = () => {
    if (pumps >= maxPumps) {
      // Balloon bursts
      setTempBank(0);
      setPumps(0);
      setBalloonSize(207.18); // Reset to initial size
      setMaxPumps(generateMaxPumps(currentBalloon + 1));
      if (currentBalloon < 30) {
        setCurrentBalloon(currentBalloon + 1);
      } else {
        navigate('/demo', { state: { totalWinnings } });
      }
    } else {
      setPumps(pumps + 1);
      setTempBank(tempBank + 0.05);
      setBalloonSize(balloonSize + 10); // Larger increment for visibility
    }
  };

  const handleCollect = () => {
    setTotalWinnings(totalWinnings + tempBank);
    setTempBank(0);
    setPumps(0);
    setBalloonSize(207.18); // Reset to initial size
    setMaxPumps(generateMaxPumps(currentBalloon + 1));
    if (currentBalloon < 30) {
      setCurrentBalloon(currentBalloon + 1);
    } else {
      navigate('/demo', { state: { totalWinnings: totalWinnings + tempBank } });
    }
  };

  return (
    <div className="balloon-page">
      <div className="header-bar"></div>
      <div
        className="watermark-image"
        style={{ backgroundImage: `url(${watermark})` }}
      ></div>
      <div
        className="logo-image"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <div className="balloon-box">
        <div
          className="balloon-image"
          style={{
            backgroundImage: `url(${balloonImg})`,
            width: `${balloonSize}px`,
            height: `${balloonSize * (250.92 / 207.18)}px`, // Maintain aspect ratio
          }}
        ></div>
        <div className="status-text balloon-number">
          Balloon number: {currentBalloon} of 30
        </div>
        <div className="status-text potential-earnings">
          Potential earnings: ${tempBank.toFixed(2)}
        </div>
        <div className="status-text num-pumps">
          Number of pumps: {pumps}
        </div>
        <div className="status-text total-winnings">
          Total Winnings: ${totalWinnings.toFixed(2)}
        </div>
        <div className="button-group">
          <div
            className="pump-button"
            onClick={handlePump}
            aria-label="Pump up the balloon"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handlePump()}
          >
            Pump up the balloon
          </div>
          <div
            className="collect-button"
            onClick={handleCollect}
            aria-label="Collect earnings"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleCollect()}
          >
            Collect ${tempBank.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}