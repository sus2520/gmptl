import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../welcome.css';
import image19 from '../assets/image19.png';

function WelcomePage() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleAccept = () => {
    if (isChecked) {
      console.log('Terms accepted, proceeding...');
      navigate('/activities');
    } else {
      alert('Por favor, acepte los Términos y Condiciones.');
    }
  };

  return (
    <div className="welcome-page">
      <div className="header-bar"></div>

      <div
        className="welcome-logo"
        style={{
          backgroundImage: image19 ? `url(${image19})` : 'none',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div
        className="welcome-bg-image"
        style={{
          backgroundImage: image19 ? `url(${image19})` : 'none',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      ></div>

      <div className="welcome-container">
        <h1 className="welcome-title">Bienvenido a Plataforma de Gamificación</h1>

        <p className="welcome-content">
          Usted ha ingresado exitosamente a la Plataforma de Gamificación, en la cual deberá
          completar una serie de actividades para conocerte más. Agradeceremos que complete las
          siguientes actividades en condiciones de concentración, tranquilidad y libre de
          distracción externa.
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

        <div
          className="accept-button"
          onClick={handleAccept}
          aria-label="Accept Terms"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleAccept()}
        >
          <span className="accept-button-text">Acepto</span>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
