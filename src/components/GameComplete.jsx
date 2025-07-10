import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import logoImage from '../assets/image19.png';
import './GameComplete.css';

export default function GameComplete({ totalEarnings }) {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const content = {
    es: {
      message: 'Muchas gracias por completar la actividad.',
      buttonText: 'OK',
      buttonAriaLabel: 'Confirmar y volver al juego',
    },
    en: {
      message: 'Thank you very much for completing the activity.',
      buttonText: 'OK',
      buttonAriaLabel: 'Confirm and return to the game',
    },
  };

  const handleOk = () => {
    navigate('/balloon');
  };

  return (
    <div className="desktop">
      <div className="group-20937">
        <div className="rectangle-746"></div>
        <div className="rectangle-745"></div>
      </div>
      <div className="image-19-1" style={{ backgroundImage: `url(${logoImage})` }}></div>
      <div className="image-19-2" style={{ backgroundImage: `url(${logoImage})` }}></div>
      <div className="rectangle-744">
        <div className="group-20909">
          <div className="message">{content[language].message}</div>
          <button
            className="button-danger"
            onClick={handleOk}
            aria-label={content[language].buttonAriaLabel}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOk()}
          >
            <span className="button-text">{content[language].buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}