import React, { useContext } from 'react';
import './gameend.css';
import image19 from '../assets/image19.png';
import { LanguageContext } from './LanguageContext';

const GameEnd = () => {
  const { language } = useContext(LanguageContext); // 'en' or 'es'

  return (
    <div className="desktop">
      {/* Top Bar */}
      <div className="group-20938">
        <div className="rectangle-746"></div>
        <div className="rectangle-745"></div>
      </div>

      {/* Logo and Watermark */}
      <div className="image-20-1" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="image-20-2" style={{ backgroundImage: `url(${image19})` }}></div>

      {/* Message Box */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          background: '#fff',
          padding: '30px 40px',
          borderRadius: '12px',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.15)',
          zIndex: 10,
          width: '300px',
        }}
      >
        {language === 'es' ? (
          <>
            <p>Balloon Analogue</p>
            <p>Risk Task</p>
            <p>Muchas gracias por completar la actividad.</p>
            <button style={{ padding: '10px 25px', marginTop: '15px' }}>OK</button>
          </>
        ) : (
          <>
            <p>Balloon Analogue</p>
            <p>Risk Task</p>
            <p>Thank you very much for completing the activity.</p>
            <button style={{ padding: '10px 25px', marginTop: '15px' }}>OK</button>
          </>
        )}
      </div>
    </div>
  );
};

export default GameEnd;
