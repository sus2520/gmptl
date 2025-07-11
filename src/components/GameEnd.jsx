import React, { useContext } from 'react';
import '../gameend.css';
import image19 from '../assets/image19.png';
import { LanguageContext } from './LanguageContext';

const GameEnd = () => {
  const { language } = useContext(LanguageContext); // 'en' or 'es'

  return (
    <div className="end-game-container">
      {/* Top Bar */}
      <div className="end-game-header">
        <div className="end-game-header-left"></div>
        <div className="end-game-header-right"></div>
      </div>

      {/* Logo and Watermark */}
      <div className="end-game-logo" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="end-game-watermark" style={{ backgroundImage: `url(${image19})` }}></div>

      {/* Message Box */}
      <div className="end-game-box">
        <div className="end-game-content">
          {language === 'es' ? (
            <>
              <h1 className="end-game-title">Felicitaciones</h1>
              <p className="end-game-text">Balloon Analogue</p>
              <p className="end-game-text">Risk Task</p>
              <p className="end-game-text">Muchas gracias por completar la actividad.</p>
              <button className="end-game-button">
                <span className="end-game-button-text">OK</span>
              </button>
            </>
          ) : (
            <>
              <h1 className="end-game-title">Congratulations</h1>
              <p className="end-game-text">Balloon Analogue</p>
              <p className="end-game-text">Risk Task</p>
              <p className="end-game-text">Thank you very much for completing the activity.</p>
              <button className="end-game-button">
                <span className="end-game-button-text">OK</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameEnd;