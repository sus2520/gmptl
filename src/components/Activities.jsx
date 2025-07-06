import React from 'react';
import '../Activities.css';
import logoImage from '../assets/image19.png';
import watermarkImage from '../assets/watermark.png'; // Optional background

const activities = [
  'Balloon Analogue Risk Task (BART)',
  'Digit Symbol Substitution Test',
  'Go/No-Go Task',
  'Iowa Gambling Task (IGT)',
  'Mental Rotation',
  'N-Back Task',
  'Negative Feedback Arithmetic Task',
  'Wisconsin Card Sorting Test (WCST)',
  'Emotion Recognition Task',
  'Reading the Mind in the Eyes',
  'Wechsler Arithmetic Subtest',
  'Numerical Sequences',
  'Delay Discounting Task',
  'Raven’s Progressive Matrices',
  'Visual Cancellation Test',
  'Modified Ultimatum Game',
  'Stop-Signal Task',
  'Rapid Verbal Fluency (Benton)',
  'Eriksen Flanker Task',
  'Token Test'
];

const Activities = () => {
  return (
    <div className="welcome-page">
      {/* Diagonal Bar */}
      <div className="header-bar"></div>

      {/* Logo */}
      <div className="welcome-logo">
        <img src={logoImage} alt="Logo" />
      </div>

      {/* Watermark */}
      <div className="welcome-bg-image">
        <img src={watermarkImage} alt="Background" />
      </div>

      {/* Main Activity Box */}
      <div className="activities-container">
        <div className="activities-title">Actividades</div>

        {/* Header Row */}
        <div className="activities-row-header">
          <div>Actividad</div>
          <div>Duración</div>
          <div>Avance</div>
        </div>

        <div className="activities-divider"></div>

        {/* Activities */}
        {activities.map((task, index) => (
          <div className="activity-row" key={index}>
            <div className="activity-icon"></div>
            <div className="activity-name">{task}</div>
            <div className="activity-duration">
              {index % 2 === 0 ? '7 minutos' : '5 minutos'}
            </div>
            <div
              className={`activity-status ${
                index < 2 ? 'ok' : 'pending'
              }`}
            >
              {index < 2 ? 'OK' : 'Pendiente'}
            </div>
          </div>
        ))}

        {/* Exit Button */}
        <div className="exit-button">Salir</div>
      </div>
    </div>
  );
};

export default Activities;
