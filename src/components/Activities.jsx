import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Activities.css';

import logoImage from '../assets/image19.png';
import watermarkImage from '../assets/watermark.png';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';

export default function Activities() {
  const navigate = useNavigate();

  const titles = [
    'Balloon Analogue Risk Task (BART)',
    'Digit Symbol Substitution Test',
    'Go/No-Go Task',
    'Iowa Gambling Task (IGT)',
    'Mental Rotation',
    'N-Back Task',
    'Negative Feedback Arithmetic Task',
    'Wisconsin Card Sorting Test (WCST)',
  ];

  const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8,
  ];

  const activities = titles.map((title, i) => ({
    title,
    duration: i % 2 === 0 ? '7 minutos' : '5 minutos',
    status: i < 2 ? 'OK' : 'Pendiente',
    statusColor: i < 2 ? '#00B050' : '#FF0000',
    link: `/game/game${i + 1}`,
    img: images[i],
  }));

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="welcome-page">
      <div className="header-bar"></div>

      <div
        className="welcome-logo"
        style={{
          backgroundImage: `url(${logoImage})`,
        }}
      ></div>

      <div
        className="welcome-bg-image"
        style={{
          backgroundImage: `url(${watermarkImage})`,
        }}
      ></div>

      <div className="activities-container">
        <div className="activities-title">Actividades</div>

        <div className="activities-row-header">
          <div className="activity-label">Actividad</div>
          <div className="activity-duration">Duración</div>
          <div className="activity-status">Avance</div>
        </div>

        <div className="activities-divider"></div>

        {activities.map((act, index) => (
          <div
            key={index}
            className={`activity-row row-${index + 1}`}
            onClick={() => navigate(act.link)}
          >
            <img
              src={act.img}
              alt={`${act.title} icon`}
              className="activity-icon"
            />
            <div className="activity-name">{act.title}</div>
            <div className="activity-duration">{act.duration}</div>
            <div className="activity-status" style={{ color: act.statusColor }}>
              {act.status}
            </div>
          </div>
        ))}

        <div
          className="exit-button"
          onClick={handleExit}
          aria-label="Exit"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleExit()}
        >
          Salir
        </div>
      </div>
    </div>
  );
}
