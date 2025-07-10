import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import '../gameend.css';
import logoImage from '../assets/image19.png';

export default function GameEnd() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { totalEarnings } = location.state || { totalEarnings: 0 };

  const content = {
    es: {
      title: '¡Juego Completado!',
      thankYou: 'Muchas gracias por completar la actividad',
      totalWinnings: 'Ganancias totales: ${amount}',
      continueButtonText: 'Volver al Menú',
      continueButtonAriaLabel: 'Volver al menú principal',
    },
    en: {
      title: 'Game Completed!',
      thankYou: 'Thank you very much for completing the activity',
      totalWinnings: 'Total Winnings: ${amount}',
      continueButtonText: 'Back to Menu',
      continueButtonAriaLabel: 'Return to main menu',
    },
  };

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <div className="desktop">
      <div className="group-20937">
        <div className="rectangle-746"></div>
        <div className="rectangle-745"></div>
      </div>
      <div className="image-19-1" style={{ backgroundImage: `url(${logoImage})` }}></div>
      <div className="image-19-2" style={{ backgroundImage: `url(${logoImage})` }}></div>
      <div className="game-end">
        <h1>{content[language].title}</h1>
        <p className="thank-you">{content[language].thankYou}</p>
        <p className="total-winnings">
          {content[language].totalWinnings.replace('{amount}', totalEarnings.toFixed(2))}
        </p>
        <button
          className="button-collect"
          onClick={handleContinue}
          aria-label={content[language].continueButtonAriaLabel}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleContinue()}
        >
          <span className="button-text">{content[language].continueButtonText}</span>
        </button>
      </div>
    </div>
  );
}