import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../balloon.css';
import logo from '../assets/image19.png';
import watermark from '../assets/watermark.png';
import balloonImg from '../assets/balloon.png';

export default function BalloonGame() {
  const navigate = useNavigate();
  const [currentBalloon, setCurrentBalloon] = useState(1);
  const [pumps, setPumps] = useState(0);
  const [tempBank, setTempBank] = useState(0);
  const [totalWinnings, setTotalWinnings] = useState(0);
  const [maxPumps, setMaxPumps] = useState(generateMaxPumps());
  const [balloonSize, setBalloonSize] = useState(100);

  function generateMaxPumps() {
    return Math.floor(Math.random() * 128) + 1; // Random explosion point (1-128)
  }

  const handlePump = () => {
    if (pumps >= maxPumps) {
      // Balloon bursts
      setTempBank(0);
      setPumps(0);
      setBalloonSize(100);
      setMaxPumps(generateMaxPumps());
      if (currentBalloon < 30) {
        setCurrentBalloon(currentBalloon + 1);
      } else {
        navigate('/demo', { state: { totalWinnings } });
      }
    } else {
      setPumps(pumps + 1);
      setTempBank(tempBank + 0.05);
      setBalloonSize(balloonSize + 5);
    }
  };

  const handleCollect = () => {
    setTotalWinnings(totalWinnings + tempBank);
    setTempBank(0);
    setPumps(0);
    setBalloonSize(100);
    setMaxPumps(generateMaxPumps());
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
        className="welcome-bg-image"
        style={{ backgroundImage: `url(${watermark})` }}
      ></div>
      <div
        className="welcome-logo"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <div className="balloon-box">
        <div
          className="balloon-graphic"
          style={{
            backgroundImage: `url(${balloonImg})`,
            width: `${balloonSize}px`,
            height: `${balloonSize}px`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="balloon-text balloon-number">
          Balloon number: {currentBalloon} of 30
        </div>
        <div className="balloon-text potential">
          Potential earnings: ${tempBank.toFixed(2)}
        </div>
        <div className="balloon-text pumps">
          Number of pumps: {pumps}
        </div>
        <div className="balloon-text winnings">
          Total Winnings: ${totalWinnings.toFixed(2)}
        </div>
        <div className="balloon-button-group">
          <div
            className="btn balloon-pump"
            onClick={handlePump}
            aria-label="Pump up the balloon"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handlePump()}
          >
            Pump up the balloon
          </div>
          <div
            className="btn balloon-collect"
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