import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import logoImage from '../assets/image19.png';
import backgroundOverlay from '../assets/image19.png';

import '../GameComplete.css';

export default function GameComplete() {
  const { language = 'en' } = useContext(LanguageContext); // Default to 'en' if undefined
  const navigate = useNavigate();
  const { state } = useLocation();
  const totalEarnings = state?.totalEarnings || 0;

  const content = {
    es: {
      title: 'Felicitaciones!!!!',
      message: 'Usted ha completado todas las actividades.',
      earnings: 'Ganancias totales: ${amount}',
      buttonText: 'OK',
      buttonAriaLabel: 'Confirmar y volver al juego',
    },
    en: {
      title: 'Congratulations!!!!',
      message: 'You have completed all the activities.',
      earnings: 'Total Earnings: ${amount}',
      buttonText: 'OK',
      buttonAriaLabel: 'Confirm and return to the game',
    },
  };

  const handleOk = () => {
    navigate('/balloon');
  };

  const logoImageLoaded = logoImage || '/fallback-image.png';
  const backgroundImageLoaded = backgroundOverlay || '/fallback-image.png';

  return (
    <main className="desktop">
      <div className="group-20937">
        <div className="rectangle-746"></div>
        <div className="rectangle-745"></div>
      </div>
      <div className="image-19-1" style={{ backgroundImage: `url(${logoImageLoaded})` }}></div>
      <div className="image-19-2" style={{ backgroundImage: `url(${backgroundImageLoaded})` }}></div>
      <div className="rectangle-744">
        <div className="group-20909">
          <h1 className="title">{content[language].title}</h1>
          <div className="message">{content[language].message}</div>
          <div className="total-earnings">
            {content[language].earnings.replace('{amount}', totalEarnings.toFixed(2))}
          </div>
          <button
            role="button"
            className="button-danger"
            onClick={handleOk}
            aria-label={content[language].buttonAriaLabel}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOk()}
          >
            <span className="button-text">{content[language].buttonText}</span>
          </button>
        </div>
      </div>
    </main>
  );
}