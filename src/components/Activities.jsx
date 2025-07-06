import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Activities.css';
import logoImage from '../assets/image19.png'; // Logo image
import watermarkImage from '../assets/watermark.png'; // Watermark image
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';
import image10 from '../assets/image10.png';

export default function Activities() {
  const navigate = useNavigate();

  const activities = [
    { title: 'Globos Asesinos', duration: '7 minutos', status: 'OK', statusColor: '#00B050', link: '/game/globos', img: image1 },
    { title: 'Sanguijuelas Voladoras', duration: '5 minutos', status: 'OK', statusColor: '#00B050', link: '/game/sanguijuelas', img: image2 },
    { title: 'Orcas Insanas', duration: '7 minutos', status: 'Pendiente', statusColor: '#FF0000', link: '/game/orcas', img: image3 },
    { title: 'Platillos Voladores', duration: '5 minutos', status: 'Pendiente', statusColor: '#FF0000', link: '/game/platillos', img: image4 },
    { title: 'La Venganza', duration: '7 minutos', status: 'Pendiente', statusColor: '#FF0000', link: '/game/venganza', img: image5 },
    { title: 'Siniestro', duration: '5 minutos', status: 'Pendiente', statusColor: '#FF0000', link: '/game/siniestro', img: image6 },
    { title: 'Casa del Terror', duration: '7 minutos', status: 'Pendiente', statusColor: '#FF0000', link: '/game/casa', img: image7 },
    { title: 'Raimundo', duration: '5 minutos', status: 'Pendiente', statusColor: '#FF0000', link: '/game/raimundo', img: image8 },
    { title: 'Leviatán', duration: '7 minutos', status: 'Pendiente', statusColor: '#FF0000', link: '/game/leviatan', img: image9 },
    { title: 'Insensatos', duration: '5 minutos', status: 'Pendiente', statusColor: '#FF0000', link: '/game/insensatos', img: image10 },
  ];

  const handleExit = () => {
    navigate('/'); // Redirect to welcome page or home
  };

  return (
    <div className="welcome-page">
      <div className="header-bar"></div>

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