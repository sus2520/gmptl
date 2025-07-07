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
    'Balloon Analogue Risk Task',
    'Digit Symbol Substitution Test',
    'Go/No-Go Task',
    'Iowa Gambling Task',
    'Mental Rotation',
    'N-Back Task',
    'Negative Feedback Arithmetic Task',
    'Wisconsin Card Sorting Test',
  ];

  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  const activities = titles.map((title, i) => ({
    title,
    duration: i % 2 === 0 ? '7 minutos' : '5 minutos',
    status: i < 2 ? 'OK' : 'Pendiente',
    statusColor: i < 2 ? '#00B050' : '#FF0000',
    link: i === 0 ? '/intro' : `/game/game${i + 1}`,
    img: images[i],
  }));

  const handleExit = () => {
    navigate('/');
  };

  const handleRowClick = (link) => {
    navigate(link);
  };

  return (
    <div className="activities-page">
      {/* Diagonal Top Bar */}
      <div className="header-bar">
        <div className="blue"></div>
        <div className="orange"></div>
      </div>

      {/* Top-left logo */}
      <img src={logoImage} alt="Application Logo" className="welcome-logo" />

      {/* Watermark */}
      <div
        className="welcome-bg-image"
        style={{ backgroundImage: `url(${watermarkImage})` }}
        aria-hidden="true"
      ></div>

      {/* Activities Section */}
      <div className="activities-container">
        <h1 className="activities-title">Actividades</h1>
        <div className="activities-row-header">
          <div className="activity-icon-placeholder"></div>
          <div className="activity-name-header">Actividad</div>
          <div className="activity-duration-header">Duración</div>
          <div className="activity-status-header">Avance</div>
        </div>
        <div className="activities-divider"></div>
        {activities.map((act, index) => (
          <button
            key={index}
            className="activity-row clickable-row"
            onClick={() => handleRowClick(act.link)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === 'Space') {
                handleRowClick(act.link);
              }
            }}
            role="link"
            aria-label={`Go to ${act.title}`}
          >
            <img
              src={act.img}
              alt={`${act.title} icon`}
              className="activity-icon"
              loading="lazy"
            />
            <div className="activity-name">{act.title}</div>
            <div className="activity-duration">{act.duration}</div>
            <div className="activity-status" style={{ color: act.statusColor }}>
              {act.status}
            </div>
          </button>
        ))}
        <button
          className="exit-button"
          onClick={handleExit}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
              handleExit();
            }
          }}
        >
          Salir
        </button>
      </div>
    </div>
  );
}