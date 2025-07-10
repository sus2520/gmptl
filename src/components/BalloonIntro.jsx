import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import '../balloonintro.css';
import logo from '../assets/image19.png';
import balloon from '../assets/balloon.png';

export default function BalloonIntro() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const content = {
    es: {
      title: 'Tarea de Riesgo<br />Globo Análogo',
      description: '¿Listo para poner a prueba tus habilidades para tomar riesgos? Bompea globos para acumular puntos, ¡pero ten cuidado—cada bombeo podría hacerlos estallar! Cuanto más grande sea el globo, mayor será la recompensa, pero un movimiento equivocado podría costarte todo. Adéntrate en este emocionante desafío para ver lo audaz que puedes ser. ¡Comienza con una ronda de práctica ahora!',
      buttonText: 'Práctica',
      buttonAriaLabel: 'Iniciar práctica',
      logoAlt: 'Logotipo de la aplicación',
      balloonAlt: 'Miniatura de globo',
    },
    en: {
      title: 'Balloon Analogue<br />Risk Task',
      description: 'Ready to test your risk-taking skills? Pump balloons to rack up points, but beware—each pump could make them pop! The bigger the balloon, the higher the reward, but one wrong move could cost you everything. Dive into this exciting challenge to see how bold you can be. Start with a practice round now!',
      buttonText: 'Practice',
      buttonAriaLabel: 'Start practice',
      logoAlt: 'Application Logo',
      balloonAlt: 'Balloon Thumbnail',
    },
  };

  const handleStartPractice = () => {
    navigate('/balloon', { state: { totalWinnings: 0 } });
  };

  return (
    <div className="balloon-intro-page">
      <div className="header-bar">
        <div className="blue"></div>
        <div className="orange"></div>
      </div>
      <img
        src={logo}
        alt={content[language].logoAlt}
        className="logo-image"
      />
      <div
        className="watermark-image"
        style={{ backgroundImage: `url(${logo})` }}
        aria-hidden="true"
      ></div>
      <img
        src={balloon}
        alt={content[language].balloonAlt}
        className="balloon-image"
      />
      <div className="intro-box">
        <h1 className="intro-title" dangerouslySetInnerHTML={{ __html: content[language].title }} />
        <p className="intro-description">{content[language].description}</p>
        <button
          className="start-btn"
          onClick={handleStartPractice}
          aria-label={content[language].buttonAriaLabel}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleStartPractice()}
        >
          {content[language].buttonText}
        </button>
      </div>
    </div>
  );
}