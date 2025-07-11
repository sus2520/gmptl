import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../balloongame.css';
import image19 from '../assets/image19.png';
import balloonImage from '../assets/image [Background removed] [Upscaled].png';
import poppedBalloonImage from '../assets/popped_balloon.png';

const BalloonGame = () => {
  const [pumps, setPumps] = useState(0);
  const [tempEarnings, setTempEarnings] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [balloonNumber, setBalloonNumber] = useState(1);
  const [isPopped, setIsPopped] = useState(false);
  const [burstPoint, setBurstPoint] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();

  // Generate random burst point based on balloon number
  const generateBurstPoint = (balloonNum) => {
    if (balloonNum <= 10) {
      return Math.floor(Math.random() * 25) + 1; // 1–25
    } else if (balloonNum <= 20) {
      return Math.floor(Math.random() * 40) + 1; // 1–40
    } else {
      return Math.floor(Math.random() * 60) + 1; // 1–60
    }
  };

  // Initialize burst point for the first balloon
  useEffect(() => {
    setBurstPoint(generateBurstPoint(balloonNumber));
  }, [balloonNumber]);

  const handlePump = () => {
    if (pumps < burstPoint && !isPopped) {
      setPumps(pumps + 1);
      setTempEarnings(tempEarnings + 0.05);
    } else {
      setIsPopped(true);
      setTempEarnings(0); // Reset temporary bank on burst
      setTimeout(() => {
        if (balloonNumber < 30) {
          setPumps(0);
          setBalloonNumber(balloonNumber + 1);
          setIsPopped(false);
        } else {
          setGameOver(true);
          navigate('/game-end', { state: { totalEarnings, gameOver: true } });
        }
      }, 2000); // Show popped state for 2 seconds
    }
  };

  const handleCollect = () => {
    if (!isPopped) {
      setTotalEarnings(totalEarnings + tempEarnings);
      if (balloonNumber < 30) {
        setPumps(0);
        setTempEarnings(0);
        setBalloonNumber(balloonNumber + 1);
        setIsPopped(false);
      } else {
        setGameOver(true);
        navigate('/game-end', { state: { totalEarnings, gameOver: true } });
      }
    }
  };

  // Calculate scale based on pumps (1.0 to 2.0 over a reference max, e.g., 60)
  const balloonScale = isPopped ? 1 : 1 + (pumps / 60) * 1; // Scales from 1x to 2x

  if (gameOver) {
    return (
      <div className="desktop">
        <div className="game-over">
          <h1>Game Over!</h1>
          <p>Total Earnings: ${totalEarnings.toFixed(2)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="desktop">
      <div className="group-20937">
        <div className="rectangle-746"></div>
        <div className="rectangle-745"></div>
      </div>
      <div className="image-19-1" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="image-19-2" style={{ backgroundImage: `url(${image19})` }}></div>
      <div
        className={`image-4 ${isPopped ? 'popped' : ''}`}
        style={{
          backgroundImage: `url(${isPopped ? poppedBalloonImage : balloonImage})`,
          transform: `scale(${balloonScale})`,
          transition: 'transform 0.3s ease',
        }}
      ></div>
      {isPopped && (
        <div className="popped-message">
          Balloon Popped!
        </div>
      )}
      <div className="rectangle-744">
        <div className="group-20909">
          <div className="balloon-number">Balloon number: {balloonNumber} of 30</div>
          <div className="potential-earnings">Potential earnings: ${tempEarnings.toFixed(2)}</div>
          <div className="number-pumps">Number of pumps: {pumps}</div>
          <div className="total-winnings">Total Winnings: ${totalEarnings.toFixed(2)}</div>
        </div>
      </div>
      <div className="group-20934">
        <button className="button-danger" onClick={handlePump} disabled={isPopped}>
          <span className="button-text">Pump the balloon</span>
        </button>
        <button className="button-collect" onClick={handleCollect} disabled={isPopped}>
          <span className="button-text">Collect $$$</span>
        </button>
      </div>
    </div>
  );
};

export default BalloonGame;