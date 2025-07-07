import React, { useState, useEffect } from 'react';
import '../balloondemo.css';
import image19 from '../assets/image19.png';
import balloonImage from '../assets/image [Background removed] [Upscaled].png';
import poppedBalloonImage from '../assets/popped_balloon.png'; // Placeholder for popped balloon image

const BalloonDemo = () => {
  const [pumps, setPumps] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [balloonNumber, setBalloonNumber] = useState(1);
  const [maxPumps, setMaxPumps] = useState(Math.floor(Math.random() * 6) + 1);
  const [isPopped, setIsPopped] = useState(false);

  useEffect(() => {
    setMaxPumps(Math.floor(Math.random() * 6) + 1);
    setIsPopped(false);
  }, [balloonNumber]);

  const handlePump = () => {
    if (pumps < maxPumps) {
      setPumps(pumps + 1);
      setEarnings(earnings + 0.5);
    } else {
      setIsPopped(true);
      setTimeout(() => {
        alert('Balloon popped! Moving to next balloon.');
        setPumps(0);
        setEarnings(0);
        setBalloonNumber(balloonNumber + 1);
        setIsPopped(false);
      }, 500); // Delay to show pop effect
    }
  };

  const handleCollect = () => {
    alert(`Collected £${earnings.toFixed(2)}! Moving to next balloon.`);
    setPumps(0);
    setEarnings(0);
    setBalloonNumber(balloonNumber + 1);
  };

  const balloonStyle = {
    backgroundImage: `url(${isPopped ? poppedBalloonImage : balloonImage})`,
    transform: `scale(${1 + pumps * 0.1})`, // Grow 10% per pump
    transition: 'transform 0.3s ease', // Smooth scaling
  };

  return (
    <div className="desktop">
      <div className="group-20937">
        <div className="rectangle-746"></div>
        <div className="rectangle-745"></div>
      </div>
      <div className="image-19-1" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="image-19-2" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="image-4" style={balloonStyle}></div>
      <div className="rectangle-744">
        <div className="group-20909">
          <div className="balloon-number">Balloon number: {balloonNumber} of 30</div>
          <div className="potential-earnings">Potential earnings: £{earnings.toFixed(2)}</div>
          <div className="number-pumps">Number of pumps: {pumps}</div>
          <div className="total-winnings">Total Winnings: £0.00</div>
        </div>
      </div>
      <div className="group-20934">
        <button className="button-danger" onClick={handlePump}>
          <span className="button-text">Pump the balloon</span>
        </button>
        <button className="button-collect" onClick={handleCollect}>
          <span className="button-text">Collect £££</span>
        </button>
      </div>
    </div>
  );
};

export default BalloonDemo;