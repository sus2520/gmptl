import React, { useState } from 'react';
import '../balloondemo.css';

const BalloonDemo = () => {
  const [pumps, setPumps] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [balloonNumber, setBalloonNumber] = useState(1);
  const maxPumps = 10;

  const handlePump = () => {
    if (pumps < maxPumps) {
      setPumps(pumps + 1);
      setEarnings(earnings + 0.5); // £0.50 per pump
    } else {
      alert('Balloon popped! Moving to next balloon.');
      setPumps(0);
      setEarnings(0);
      setBalloonNumber(balloonNumber + 1);
    }
  };

  const handleCollect = () => {
    alert(`Collected £${earnings.toFixed(2)}! Moving to next balloon.`);
    setPumps(0);
    setEarnings(0);
    setBalloonNumber(balloonNumber + 1);
  };

  return (
    <div className="desktop">
      <div className="top-bar">
        <div className="rectangle-746"></div>
        <div className="rectangle-745"></div>
      </div>
      <div className="image-19-1" style={{ backgroundImage: `url(/assets/image19.png)` }}></div>
      <div className="image-19-2" style={{ backgroundImage: `url(/assets/image19.png)` }}></div>
      <div className="rectangle-744"></div>
      <div className="group-20911">
        <div className="image-4" style={{ backgroundImage: `url(/assets/balloon.png)` }}></div>
        <div className="group-20909">
          <div className="balloon-number">Balloon number: {balloonNumber} of 30</div>
          <div className="potential-earnings">Potential earnings: £{earnings.toFixed(2)}</div>
          <div className="number-pumps">Number of pumps: {pumps}</div>
          <div className="total-winnings">Total Winnings: £0.00</div>
        </div>
      </div>
      <div className="group-20934">
        <button className="button-danger" onClick={handlePump}>
          <span className="button-text">Pump up the balloon</span>
        </button>
        <button className="button-collect" onClick={handleCollect}>
          <span className="button-text">Collect £££</span>
        </button>
      </div>
    </div>
  );
};

export default BalloonDemo;