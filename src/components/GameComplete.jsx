import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import logoImage from '../assets/image19.png';
import backgroundImage from '../assets/background-overlay.png'; // Replace with actual background image or use logoImage as fallback
import '../GameComplete.css';

export default function GameComplete() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const totalEarnings = state?.totalEarnings || 0; // Fallback to 0 if undefined

  const content = {
    es: {
      message: 'Muchas gracias por completar la actividad.',
      earnings: 'Ganancias totales: ${amount}',
      buttonText: 'OK',
      buttonAriaLabel: 'Confirmar y volver al juego',
    },
    en: {
      message: 'Thank you very much for completing the activity.',
      earnings: 'Total Earnings: ${amount}',
      buttonText: 'OK',
      buttonAriaLabel: 'Confirm and return to the game',
    },
  };

  const handleOk = () => {
    navigate('/balloon'); // Navigates back to BalloonDemo as requested
  };

  // Fallback images
  const logoImageLoaded = logoImage || '/path/to/fallback-image.png';
  const backgroundImageLoaded = backgroundImage || logoImage || '/path/to/fallback-image.png';

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
          <h1 className="message">{content[language].message}</h1>
          <div className="total-earnings">
            {content[language].earnings.replace('{amount}', totalEarnings.toFixed(2))}
          </div>
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
    </main>
  );
}