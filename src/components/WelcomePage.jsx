import { useState } from 'react';
import '../welcome.css';
import image19 from '../assets/image19.png';

function WelcomePage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleAccept = () => {
    if (isChecked) {
      console.log('Terms accepted, proceeding...');
      // Add navigation logic here, e.g., using react-router-dom
      // import { useNavigate } from 'react-router-dom';
      // const navigate = useNavigate();
     seven navigate('/next-page');
    } else {
      alert('Please accept the Terms and Conditions.');
    }
  };

  return (
    <div className="welcome-page">
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
          <input
            type="checkbox"
            className="checkbox"
            id="terms"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="terms" className="checkbox-label">
            Acepto los Términos y Condiciones y Políticas de Privacidad.
          </label>
        </div>
        <div className="accept-button" onClick={handleAccept} aria-label="Accept Terms">
          <span className="accept-button-text">Acepto</span>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;