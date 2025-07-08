import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import '../welcome.css';
import logoImage from '../assets/image19.png';
import watermarkImage from '../assets/watermark.png';

function WelcomePage() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const content = {
    es: {
      title: 'Bienvenido a Plataforma de Gamificación',
      description:
        'Usted ha ingresado exitosamente a la Plataforma de Gamificación, en la cual deberá completar una serie de actividades para conocerte más. Agradeceremos que complete las siguientes actividades en condiciones de concentración, tranquilidad y libre de distracción externa.',
      checkboxLabel: 'Acepto los Términos y Condiciones y Políticas de Privacidad.',
      buttonText: 'Acepto',
      buttonAriaLabel: 'Aceptar Términos',
      alert: 'Por favor, acepte los Términos y Condiciones.',
    },
    en: {
      title: 'Welcome to the Gamification Platform',
      description:
        'You have successfully entered the Gamification Platform, where you will need to complete a series of activities to help us learn more about you. We appreciate it if you complete the following activities in a focused, calm environment, free from external distractions.',
      checkboxLabel: 'I accept the Terms and Conditions and Privacy Policy.',
      buttonText: 'Accept',
      buttonAriaLabel: 'Accept Terms',
      alert: 'Please accept the Terms and Conditions.',
    },
  };

  const handleAccept = () => {
    if (isChecked) {
      console.log('Terms accepted, proceeding...');
      navigate('/activities');
    } else {
      alert(content[language].alert);
    }
  };

  return (
    <div className="welcome-page">
      <div className="header-bar">
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <div
        className="welcome-logo"
        style={{
          backgroundImage: logoImage ? `url(${logoImage})` : 'none',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div
        className="welcome-bg-image"
        style={{
          backgroundImage: watermarkImage ? `url(${watermarkImage})` : 'none',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="welcome-container">
        <h1 className="welcome-title">{content[language].title}</h1>
        <p className="welcome-content">{content[language].description}</p>
        <div className="checkbox-container">
          <input
            type="checkbox"
            className="checkbox"
            id="terms"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="terms" className="checkbox-label">
            {content[language].checkboxLabel}
          </label>
        </div>
        <div
          className="accept-button"
          onClick={handleAccept}
          aria-label={content[language].buttonAriaLabel}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleAccept()}
        >
          <span className="accept-button-text">{content[language].buttonText}</span>
        </div>
        <div className="language-buttons">
          <button
            className="language-btn"
            onClick={() => setLanguage('es')}
            disabled={language === 'es'}
          >
            Español
          </button>
          <button
            className="language-btn"
            onClick={() => setLanguage('en')}
            disabled={language === 'en'}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;