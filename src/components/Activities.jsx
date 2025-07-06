import React from 'react';
import '../Activities.css';

export default function Activities() {
  return (
    <div className="welcome-page">
      {/* Diagonal Bar Header */}
      <div className="header-bar">
        <div className="header-left" />
        <div className="header-right" />
      </div>

      {/* Background Watermark */}
      <div className="welcome-bg-image" />

      {/* Logo */}
      <div className="welcome-logo" />

      {/* Activities Container */}
      <div className="activities-container">
        <div className="activities-title">Actividades</div>
        <div className="activities-row-header">
          <div className="activity-label">Actividad</div>
          <div className="activity-duration">Duración</div>
          <div className="activity-status">Avance</div>
        </div>
        <div className="activities-divider" />

        {/* Activities List */}
        {[
          { title: 'Globos Asesinos', duration: '7 minutos', status: 'OK', statusColor: '#00B050' },
          { title: 'Sanguijuelas Voladoras', duration: '5 minutos', status: 'OK', statusColor: '#00B050' },
          { title: 'Orcas Insanas', duration: '7 minutos', status: 'Pendiente', statusColor: '#FF0000' },
          { title: 'Platillos Voladores', duration: '5 minutos', status: 'Pendiente', statusColor: '#FF0000' },
          { title: 'La Venganza', duration: '7 minutos', status: 'Pendiente', statusColor: '#FF0000' },
          { title: 'Siniestro', duration: '5 minutos', status: 'Pendiente', statusColor: '#FF0000' },
          { title: 'Casa del Terror', duration: '7 minutos', status: 'Pendiente', statusColor: '#FF0000' },
          { title: 'Raimundo', duration: '5 minutos', status: 'Pendiente', statusColor: '#FF0000' },
          { title: 'Leviatán', duration: '7 minutos', status: 'Pendiente', statusColor: '#FF0000' },
          { title: 'Insensatos', duration: '5 minutos', status: 'Pendiente', statusColor: '#FF0000' },
        ].map((act, index) => (
          <div key={index} className="activity-row">
            <div className="activity-icon" />
            <div className="activity-name">{act.title}</div>
            <div className="activity-duration">{act.duration}</div>
            <div className="activity-status" style={{ color: act.statusColor }}>{act.status}</div>
          </div>
        ))}

        {/* Exit Button */}
        <div className="exit-button">Salir</div>
      </div>
    </div>
  );
}
