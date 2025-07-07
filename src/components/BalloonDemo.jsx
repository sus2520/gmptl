import React, { useState, useEffect } from 'react';
import '../balloondemo.css';
import image19 from '../assets/image19.png';
import balloonImage from '../assets/image [Background removed] [Upscaled].png';

const BalloonDemo = () => {
  const [pumps, setPumps] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [balloonNumber, setBalloonNumber] = useState(1);
  const [totalWinnings, setTotalWinnings] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [popped, setPopped] = useState(false);
  const [maxPumps, setMaxPumps] = useState(() => Math.floor(Math.random() * (15 - 5 + 1)) + 5); // Random pop point (5-15)

  // Reset maxPumps for each balloon
  useEffect(() => {
    setMaxPumps(Math.floor(Math.random() * (15 - 5 + 1)) + 5);
  }, [balloonNumber]);

  const handlePump = () => {
    if (gameOver || popped) return;
    if (pumps < maxPumps) {
      setPumps(pumps + 1);
      setEarnings(earnings + 0.5);
    } else {
      setPopped(true);
      setTimeout(() => {
        setPumps(0);
        setEarnings(0);
        setPopped(false);
        if (balloonNumber < 30) {
          setBalloonNumber(balloonNumber + 1);
        } else {
          setGameOver(true);
        }
      }, 1000); // Delay for pop animation
    }
  };

  const handleCollect = () => {
    if (gameOver || popped || earnings === 0) return;
    setTotalWinnings(totalWinnings + earnings);
    setPumps(0);
    setEarnings(0);
    if (balloonNumber < 30) {
      setBalloonNumber(balloonNumber + 1);
    } else {
      setGameOver(true);
    }
  };

  const handleReset = () => {
    setPumps(0);
    setEarnings(0);
    setBalloonNumber(1);
    setTotalWinnings(0);
    setGameOver(false);
    setPopped(false);
  };

  // Balloon style, respecting .image-4 CSS
  const balloonStyle = {
    backgroundImage: `url(${balloonImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transform: `scale(${1 + pumps * 0.05})`, // Grows 5% per pump
    transition: 'transform 0.3s ease',
    width: '207.18px',
    height: '250.92px',
    position: 'absolute',
    left: '452.02px',
    top: '373.12px',
    zIndex: 4,
  };

  return (
    <div className="desktop" role="main" aria-label="Balloon Demo Game">
      <div
        className="instructions"
        style={{
          position: 'absolute',
          top: '230px',
          left: 'calc(50% - 300px)',
          width: '600px',
          textAlign: 'center',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '18px',
          color: '#333333',
        }}
      >
        <p>Pump the balloon to earn £0.50 per pump. Collect earnings or risk popping it! Game ends after 30 balloons.</p>
      </div>
      <div className="group-20937">
        <div className="rectangle-746"></div>
        <div className="rectangle-745"></div>
      </div>
      <div className="image-19-1" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="image-19-2" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className={`image-4 ${popped ? 'popped' : ''}`} style={balloonStyle} aria-label={`Balloon ${balloonNumber}`}></div>
      <div
        className="group-20909"
        style={{
          position: 'absolute',
          top: '580px', // Positioned above .group-20934 (658.4px)
          left: 'calc(50% - 303px/2)', // Centered, matching max-width
          zIndex: 5,
        }}
      >
        <div className="balloon-number">Balloon number: {balloonNumber} of 30</div>
        <div className="potential-earnings">Potential earnings: £{earnings.toFixed(2)}</div>
        <div className="number-pumps">Number of pumps: {pumps}</div>
        <div className="total-winnings">Total Winnings: £{totalWinnings.toFixed(2)}</div>
      </div>
      {gameOver ? (
        <div
          className="game-over"
          role="alert"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#FFFFFF',
            padding: '20px',
            border: '0.5px solid #2C51A1',
            borderRadius: '10px',
            boxShadow: '0px 0px 5.93px rgba(0, 0, 0, 0.08)',
            textAlign: 'center',
            fontFamily: 'Montserrat, sans-serif',
            zIndex: 10,
            width: '400px',
          }}
        >
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#333333', margin: '0 0 10px' }}>Game Over!</h2>
          <p style={{ fontSize: '24px', color: '#333333', margin: '10px 0' }}>Total Winnings: £{totalWinnings.toFixed(2)}</p>
          <p style={{ fontSize: '24px', color: '#333333', margin: '10px 0' }}>
            Average per balloon: £{(totalWinnings / (balloonNumber - 1 || 1)).toFixed(2)}
          </p>
          <button
            className="button-danger"
            onClick={handleReset}
            aria-label="Restart game"
            style={{ marginTop: '20px' }}
          >
            <span className="button-text">Play Again</span>
          </button>
        </div>
      ) : (
        <div className="group-20934">
          <button
            className="button-danger"
            onClick={handlePump}
            disabled={popped || gameOver}
            aria-label={`Pump balloon ${balloonNumber}`}
          >
            <span className="button-text">Pump the balloon</span>
          </button>
          <button
            className="button-collect"
            onClick={handleCollect}
            disabled={earnings === 0 || popped || gameOver}
            aria-label={`Collect £${earnings.toFixed(2)}`}
          >
            <span className="button-text">Collect £££</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default BalloonDemo;