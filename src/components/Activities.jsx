import React from 'react';
import '../activities.css';
import logoImage from '../assets/image19.png';

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
    <div className="activities-wrapper">
      <div className="header-bar"></div>

      <div className="activities-logo">
        <img src={logoImage} alt="Logo" />
      </div>

      <div className="activities-container">
        <h1 className="activities-title">Actividades</h1>

        <div className="activities-table">
          <div className="activities-header">
            <span>Actividad</span>
            <span>Duración</span>
            <span>Avance</span>
          </div>

          {activities.map((task, index) => (
            <div className="activities-row" key={index}>
              <span>{task}</span>
              <span>{index % 2 === 0 ? '7 minutos' : '5 minutos'}</span>
              <span className={index < 2 ? 'status-ok' : 'status-pending'}>
                {index < 2 ? 'OK' : 'Pendiente'}
              </span>
            </div>
          ))}
        </div>

        <button className="exit-button">Salir</button>
      </div>
    </div>
  );
};

export default Activities;