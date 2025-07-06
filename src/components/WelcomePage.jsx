// src/components/WelcomePage.jsx
import '../welcome.css';
import image19 from '../assets/image19.png'; // Updated import

function WelcomePage() {
  return (
    <div>
      <div className="header-bar">
        <div className="header-left"></div>
        <div className="header-right"></div>
      </div>
      <div
        className="welcome-bg-image"
        style={{ backgroundImage: `url(${image19})` }}
      ></div>
      <div
        className="welcome-logo"
        style={{ backgroundImage: `url(${image19})` }}
      ></div>
      <div className="welcome-container">
        <h1 className="welcome-title">Bienvenido a Plataforma de Gamificación</h1>
        <p className="welcome-content">
          Usted ha ingresado exitosamente a la Plataforma de Gamificación, en la
          cual deberá completar una serie de actividades para saber más de
          usted. Agradeceremos que complete las siguientes actividades en
          condiciones de concentración, tranquilidad y libre de distracción
          externa.
        </p>
        <div className="checkbox-container">
          <input type="checkbox" className="checkbox" />
          <label className="checkbox-label">
            Acepto los Términos y Condiciones y Políticas de Privacidad.
          </label>
        </div>
        <div className="accept-button">
          <span className="accept-button-text">Acepto</span>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;