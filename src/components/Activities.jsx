import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
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
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const content = {
    es: {
      title: 'Actividades',
      activityHeader: 'Actividad',
      durationHeader: 'Duración',
      statusHeader: 'Avance',
      exitButtonText: 'Salir',
      exitButtonAriaLabel: 'Salir de actividades',
      activities: [
        'Tarea de Riesgo Análogo con Globos',
        'Prueba de Sustitución de Símbolos de Dígitos',
        'Tarea de Ir/No-Ir',
        'Tarea de Apuestas de Iowa',
        'Rotación Mental',
        'Tarea N-Back',
        'Tarea Aritmética de Retroalimentación Negativa',
        'Prueba de Clasificación de Cartas de Wisconsin',
      ],
      durations: [
        '7 minutos',
        '5 minutos',
        '7 minutos',
        '5 minutos',
        '7 minutos',
        '5 minutos',
        '7 minutos',
        '5 minutos',
      ],
      statuses: ['OK', 'OK', 'Pendiente', 'Pendiente', 'Pendiente', 'Pendiente', 'Pendiente', 'Pendiente'],
      statusColors: ['#00B050', '#00B050', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000'],
    },
    en: {
      title: 'Activities',
      activityHeader: 'Activity',
      durationHeader: 'Duration',
      statusHeader: 'Progress',
      exitButtonText: 'Exit',
      exitButtonAriaLabel: 'Exit activities',
      activities: [
        'Balloon Analogue Risk Task',
        'Digit Symbol Substitution Test',
        'Go/No-Go Task',
        'Iowa Gambling Task',
        'Mental Rotation',
        'N-Back Task',
        'Negative Feedback Arithmetic Task',
        'Wisconsin Card Sorting Test',
      ],
      durations: [
        '7 minutes',
        '5 minutes',
        '7 minutes',
        '5 minutes',
        '7 minutes',
        '5 minutes',
        '7 minutes',
        '5 minutes',
      ],
      statuses: ['OK', 'OK', 'Pending', 'Pending', 'Pending', 'Pending', 'Pending', 'Pending'],
      statusColors: ['#00B050', '#00B050', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000'],
    },
  };

  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  const activities = content[language].activities.map((title, i) => ({
    title,
    duration: content[language].durations[i],
    status: content[language].statuses[i],
    statusColor: content[language].statusColors[i],
    link: i === 0 ? '/intro' : [
      '/digit-symbol',
      '/go-no-go',
      '/iowa-gambling',
      '/mental-rotation',
      '/n-back',
      '/negative-feedback',
      '/wisconsin-card'
    ][i - 1], // Direct routes without /game/ or /activities/ prefix
    img: images[i],
  }));

  const handleExit = () => {
    navigate('/'); // Navigate to root
  };

  return (
    <div className="welcome-page">
      <div className="header-bar">
        <div className="blue"></div>
        <div className="orange"></div>
      </div>
      <div
        className="welcome-logo"
        style={{
          backgroundImage: logoImage ? `url(${logoImage})` : 'none',
        }}
      ></div>
      <div
        className="welcome-bg-image"
        style={{
          backgroundImage: watermarkImage ? `url(${watermarkImage})` : 'none',
        }}
      ></div>
      <div className="activities-container">
        <div className="activities-title">{content[language].title}</div>
        <div className="activities-row-header">
          <div className="activity-icon-placeholder"></div>
          <div className="activity-name-header">{content[language].activityHeader}</div>
          <div className="activity-duration-header">{content[language].durationHeader}</div>
          <div className="activity-status-header">{content[language].statusHeader}</div>
        </div>
        <div className="activities-divider"></div>
        {activities.map((act, index) => (
          <div
            key={index}
            className="activity-row clickable-row"
            onClick={() => navigate(act.link)}
          >
            <img src={act.img} alt={`${act.title} icon`} className="activity-icon" />
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
          aria-label={content[language].exitButtonAriaLabel}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleExit()}
        >
          {content[language].exitButtonText}
        </div>
      </div>
    </div>
  );
}