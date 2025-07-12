import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../gameend.css';
import image19 from '../assets/image19.png';
import { LanguageContext } from './LanguageContext';

const GameEnd = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleOkClick = () => {
    // Can leave empty or add logic if needed
  };

  const handleGoToMenu = () => {
    navigate('/activities');
  };

  return (
    <div className="end-game-desktop">
      {/* Top Bar */}
      <div className="end-game-group-20937">
        <div className="end-game-rectangle-746"></div>
        <div className="end-game-rectangle-745"></div>
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

              <button className="end-game-button" onClick={handleOkClick}>
                <span className="end-game-button-text">OK</span>
              </button>
              <button className="end-game-button" onClick={handleGoToMenu} style={{ marginTop: '20px' }}>
                <span className="end-game-button-text">Volver al menú del juego</span>
              </button>
            </>
          ) : (
            <>
              <h1 className="end-game-title">Congratulations</h1>
              <p className="end-game-text">Balloon Analogue</p>
              <p className="end-game-text">Risk Task</p>
              <p className="end-game-text">Thank you very much for completing the activity.</p>

              <button className="end-game-button" onClick={handleOkClick}>
                <span className="end-game-button-text">OK</span>
              </button>
              <button className="end-game-button" onClick={handleGoToMenu} style={{ marginTop: '20px' }}>
                <span className="end-game-button-text">Go Back to Game Menu</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameEnd;