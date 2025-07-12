import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../igt.css';
import image19 from '../assets/image19.png';
import { LanguageContext } from './LanguageContext';

const IGT = () => {
  const [gameState, setGameState] = useState('demo'); // demo, ended, real, gameEnd
  const [bank, setBank] = useState(2000); // Starting bank of $2000
  const [trialNumber, setTrialNumber] = useState(1);
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  // Deck configurations: A/B (disadvantageous), C/D (advantageous)
  const decks = {
    A: { reward: 100, penalty: [-150, -200, -250, -300, -350], penaltyProbability: 0.5 },
    B: { reward: 100, penalty: [-1250], penaltyProbability: 0.1 },
    C: { reward: 50, penalty: [-25, -50, -75], penaltyProbability: 0.5 },
    D: { reward: 50, penalty: [-250], penaltyProbability: 0.1 },
  };

  // Handle deck selection
  const handleDeckSelect = (deck) => {
    if (gameState === 'demo' || gameState === 'real') {
      const maxTrials = gameState === 'demo' ? 5 : 100;
      const { reward, penalty, penaltyProbability } = decks[deck];
      const isPenalty = Math.random() < penaltyProbability;
      const penaltyAmount = isPenalty ? penalty[Math.floor(Math.random() * penalty.length)] : 0;
      const amount = reward + penaltyAmount;
      setBank(bank + amount);
      setSelectedDeck(deck);
      setFeedback({ amount, isPenalty });
      setTimeout(() => {
        setSelectedDeck(null);
        setFeedback(null);
        if (trialNumber < maxTrials) {
          setTrialNumber(trialNumber + 1);
        } else {
          if (gameState === 'demo') {
            setGameState('ended');
            setBank(2000); // Reset bank for real game
            setTrialNumber(1);
          } else {
            setGameState('gameEnd');
          }
        }
      }, 2000); // Show feedback for 2 seconds
    }
  };

  return (
    <div className="igt-desktop">
      <div className="igt-group-20937">
        <div className="igt-rectangle-746"></div>
        <div className="igt-rectangle-745"></div>
      </div>
      <div
        className="igt-image-19-1"
        style={{ backgroundImage: `url(${image19})`, position: 'absolute', top: '68.99px', left: '116.27px', zIndex: 0 }}
      ></div>
      <div
        className="igt-image-19-2"
        style={{ backgroundImage: `url(${image19})`, position: 'absolute', top: '0', left: '0', zIndex: -1 }}
      ></div>
      {(gameState === 'demo' || gameState === 'real') && (
        <div className="igt-game-container">
          <h2>
            {gameState === 'demo'
              ? language === 'es'
                ? 'Demostración: Tarea de Juego de Iowa'
                : 'Demo: Iowa Gambling Task'
              : language === 'es'
              ? 'Juego Real: Tarea de Juego de Iowa'
              : 'Real Game: Iowa Gambling Task'}
          </h2>
          <p>
            {language === 'es'
              ? 'Selecciona una carta de uno de los cuatro mazos (A, B, C, D) para ganar dinero.'
              : 'Select a card from one of the four decks (A, B, C, D) to earn money.'}
          </p>
          <div className="igt-deck-container">
            {['A', 'B', 'C', 'D'].map((deck) => (
              <button
                key={deck}
                className={`igt-deck-button ${selectedDeck === deck ? 'selected' : ''}`}
                onClick={() => handleDeckSelect(deck)}
                disabled={selectedDeck !== null}
              >
                {deck}
              </button>
            ))}
          </div>
          {feedback && (
            <div className="igt-feedback">
              <p>
                {language === 'es'
                  ? `Mazo ${selectedDeck}: ${feedback.amount >= 0 ? 'Ganaste' : 'Perdiste'} $${Math.abs(feedback.amount).toFixed(2)}`
                  : `Deck ${selectedDeck}: ${feedback.amount >= 0 ? 'Won' : 'Lost'} $${Math.abs(feedback.amount).toFixed(2)}`}
              </p>
            </div>
          )}
          <div className="igt-stats">
            <p>
              {gameState === 'demo'
                ? language === 'es'
                  ? `Prueba ${trialNumber} de 5`
                  : `Trial ${trialNumber} of 5`
                : language === 'es'
                ? `${trialNumber} de 100`
                : `${trialNumber} of 100`}
            </p>
            <p>
              {language === 'es' ? 'Banco' : 'Bank'}: ${bank.toFixed(2)}
            </p>
          </div>
        </div>
      )}
      {gameState === 'ended' && (
        <div className="igt-game-ended-container" style={{ position: 'relative' }}>
          <div
            className="igt-image-19-2"
            style={{ backgroundImage: `url(${image19})`, position: 'absolute', top: '0', left: '0', zIndex: -1 }}
          ></div>
          <div
            className="igt-image-19-1"
            style={{ backgroundImage: `url(${image19})`, position: 'absolute', top: '68.99px', left: '116.27px', zIndex: 0 }}
          ></div>
          <h2>{language === 'es' ? 'Demostración Terminada' : 'Demo Game Ended'}</h2>
          <p>{language === 'es' ? '¿Listo para jugar el juego real?' : 'Ready to play the real game?'}</p>
          <button
            className="igt-start-real-game-btn"
            onClick={() => {
              setBank(2000);
              setTrialNumber(1);
              setGameState('real');
            }}
          >
            {language === 'es' ? 'Iniciar Juego Real' : 'Start Real Game'}
          </button>
        </div>
      )}
      {gameState === 'gameEnd' && (
        <div className="igt-end-game-content">
          {language === 'es' ? (
            <>
              <h1 className="igt-end-game-title">Felicitaciones</h1>
              <p className="igt-end-game-text">Tarea de Juego de Iowa</p>
              <p className="igt-end-game-text">Puntuación: ${bank.toFixed(2)}</p>
              <p className="igt-end-game-text">Muchas gracias por completar la actividad.</p>
              <button className="igt-end-game-button" onClick={() => {}}>
                <span className="igt-end-game-button-text">OK</span>
              </button>
              <button
                className="igt-end-game-button"
                onClick={() => navigate('/activities')}
                style={{ marginTop: '20px' }}
              >
                <span className="igt-end-game-button-text">Volver al menú del juego</span>
              </button>
            </>
          ) : (
            <>
              <h1 className="igt-end-game-title">Congratulations</h1>
              <p className="igt-end-game-text">Iowa Gambling Task</p>
              <p className="igt-end-game-text">Score: ${bank.toFixed(2)}</p>
              <p className="igt-end-game-text">Thank you very much for completing the activity.</p>
              <button className="igt-end-game-button" onClick={() => {}}>
                <span className="igt-end-game-button-text">OK</span>
              </button>
              <button
                className="igt-end-game-button"
                onClick={() => navigate('/activities')}
                style={{ marginTop: '20px' }}
              >
                <span className="igt-end-game-button-text">Go Back to Game Menu</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default IGT;