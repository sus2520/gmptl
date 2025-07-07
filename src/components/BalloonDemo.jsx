import React from 'react';
import '../balloondemo.css';


export default function BalloonDemo() {
  return (
    <div className="balloondemo-page">
      {/* Watermark background image */}
      <div className="image19-2" />

      {/* Logo image */}
      <div className="image19-1" />

      {/* Main container */}
      <div className="rectangle744">
        {/* Group 20911 */}
        <div className="group20911">
          {/* Balloon Image */}
          <div className="balloon-image" />
        </div>

        {/* Group 20910 and 20909 (overlapping or duplicates?) */}
        <div className="group20910" />
        <div className="group20909" />

        {/* Text elements */}
        <div className="balloon-number">Balloon number: 1 of 30</div>
        <div className="potential-earnings">Potential earnings: £0.00</div>
        <div className="number-of-pumps">Number of pumps: 0</div>
        <div className="total-winnings">Total Winnings: £0.00</div>

        {/* Button container */}
        <div className="group20934">
          <button className="button-danger-pump" type="button">
            Pump up the balloon
          </button>
          <button className="button-danger-collect" type="button">
            Collect £££
          </button>
        </div>
      </div>

      {/* Header Bar */}
      <div className="group20937">
        <div className="rectangle746" />
        <div className="rectangle745" />
      </div>
    </div>
  );
}
