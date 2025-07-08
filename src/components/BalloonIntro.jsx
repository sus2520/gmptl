import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../balloonintro.css';
import logo from '../assets/image19.png'; // Top-left logo and watermark
import balloon from '../assets/balloon.png'; // Thumbnail balloon

export default function BalloonIntro() {
  const navigate = useNavigate();

  const handleStartPractice = () => {
    navigate('/demo', { state: { totalWinnings: 0 } });
  };

  return (
    <div className="balloon-intro-page">
      {/* Diagonal Top Bar */}
      <div className="header-bar">
        <div className="blue"></div>
        <div className="orange"></div>
      </div>

      {/* Top-left logo */}
      <img
        src={logo}
        alt="Logotipo de la aplicación"
        className="logo-image"
      />

      {/* Center watermark */}
      <div
        className="watermark-image"
        style={{ backgroundImage: `url(${logo})` }}
        aria-hidden="true" // Watermark is decorative
      ></div>

      {/* Small thumbnail balloon */}
      <img
        src={balloon}
        alt="Miniatura de globo"
        className="balloon-image"
      />

      {/* Main white box */}
      <div className="intro-box">
        <h1 className="intro-title">
          Tarea de Riesgo<br />Globo Análogo
        </h1>
        <p className="intro-description">
          ¿Listo para poner a prueba tus habilidades para tomar riesgos? Bombea globos para acumular puntos, ¡pero ten cuidado—cada bombeo podría hacerlos estallar! Cuanto más grande sea el globo, mayor será la recompensa, pero un movimiento equivocado podría costarte todo. Adéntrate en este emocionante desafío para ver lo audaz que puedes ser. ¡Comienza con una ronda de práctica ahora!
        </p>
        <button
          className="start-btn"
          onClick={handleStartPractice}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleStartPractice();
            }
          }}
        >
          Práctica
        </button>
      </div>
    </div>
  );
}