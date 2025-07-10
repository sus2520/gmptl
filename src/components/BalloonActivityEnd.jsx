import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import logoImage from '../assets/image19.png';
import './BalloonActivityEnd.css';

export default function BalloonActivityEnd() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { balloonNumber = 1, totalEarnings = 0, pumps = 0 } = location.state || {};

  const content = {
    es: {
      title: 'Demostración de Globos',
      message: 'Muchas gracias por completar la actividad.',
      okButtonText: 'OK',
      okButtonAriaLabel: 'Continuar al siguiente globo o finalizar el juego',
    },
    en: {
      title: 'Balloon Demo',
      message: 'Thank you very much for completing the activity.',
      okButtonText: 'OK',
      okButtonAriaLabel: 'Continue to the next balloon or end the game',
    },
  };

  const handleOkClick = () => {
    if (balloonNumber < 30) {
      navigate('/demo', {
        state: {
          balloonNumber: balloonNumber + 1,
          totalEarnings,
          pumps: 0,
          tempEarnings: 0,
          isPopped: false,
        },
      });
    } else {
      navigate('/balloon');
    }
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
          <div className="title">{content[language].title}</div>
          <div className="message">{content[language].message}</div>
        </div>
      </div>
      <div className="group-20934">
        <button
          className="button-danger"
          onClick={handleOkClick}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOkClick()}
          aria-label={content[language].okButtonAriaLabel}
        >
          <span className="button-text">{content[language].okButtonText}</span>
        </button>
      </div>
    </div>
  );
}