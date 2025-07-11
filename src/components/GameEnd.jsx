import React from 'react';
import '../gameend.css';
import image19 from '../assets/image19.png'; // ✅ Correct way to import images in React

const GameEnd = () => {
  return (
    <div className="desktop">
      {/* Top Bar */}
      <div className="group-20938">
        <div className="rectangle-746"></div>
        <div className="rectangle-745"></div>
      </div>

      {/* Logo Image */}
      <div
        className="image-20-1"
        style={{ backgroundImage: `url(${image19})` }}
      ></div>

      {/* Watermark Image */}
      <div
        className="image-20-2"
        style={{ backgroundImage: `url(${image19})` }}
      ></div>

      {/* Main Content */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 5,
        }}
      >
        <h2>Page 6 - Spanish / English</h2>

        <div>
          <h3>Spanish:</h3>
          <p>Balloon Analogue</p>
          <p>Risk Task</p>
          <p>Muchas gracias por completar la actividad.</p>
          <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px' }}>
            OK
          </button>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h3>English:</h3>
          <p>Balloon Analogue</p>
          <p>Risk Task</p>
          <p>Thank you very much for completing the activity.</p>
          <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px' }}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameEnd;
