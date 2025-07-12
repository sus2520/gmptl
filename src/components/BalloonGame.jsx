import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../balloongame.css';
import image19 from '../assets/image19.png';
import balloonImage from '../assets/image [Background removed] [Upscaled].png';
import poppedBalloonImage from '../assets/popped_balloon.png';
import { LanguageContext } from './LanguageContext';

const BalloonGame = () => {
  const [gameState, setGameState] = useState('demo'); // demo, ended, real, gameEnd
  const [pumps, setPumps] = useState(0);
  const [tempEarnings, setTempEarnings] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [balloonNumber, setBalloonNumber] = useState(1);
  const [isPopped, setIsPopped] = useState(false);
  const [burstPoint, setBurstPoint] = useState(0);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  // Generate random burst point based on balloon number
  const generateBurstPoint = (balloonNum) => {
    if (balloonNum <= 10) {
      return Math.floor(Math.random() * 25) + 1; // 1–25
    } else if (balloonNum <= 20) {
      return Math.floor(Math.random() * 40) + 1; // 1–40
    } else {
      return Math.floor(Math.random() * 60) + 1; // 1–60
    }
  };

  // Initialize burst point for the current balloon
  useEffect(() => {
    setBurstPoint(generateBurstPoint(balloonNumber));
  }, [balloonNumber]);

  // Handle pump action
  const handlePump = () => {
    if (pumps < burstPoint && !isPopped) {
      setPumps(pumps + 1);
      setTempEarnings(tempEarnings + 0.05);
    } else {
      setIsPopped(true);
      setTempEarnings(0); // Reset temporary bank on burst
      setTimeout(() => {
        const maxBalloons = gameState === 'demo' ? 5 : 30;
        if (balloonNumber < maxBalloons) {
          setPumps(0);
          setBalloonNumber(balloonNumber + 1);
          setIsPopped(false);
        } else {
          if (gameState === 'demo') {
            setGameState('ended');
            setPumps(0);
            setTempEarnings(0);
            setBalloonNumber(1);
          } else {
            setGameState('gameEnd');
          }
        }
      }, 2000); // Show popped state for 2 seconds
    }
  };

  // Handle collect action
  const handleCollect = () => {
    if (!isPopped) {
      setTotalEarnings(totalEarnings + tempEarnings);
      const maxBalloons = gameState === 'demo' ? 5 : 30;
      if (balloonNumber < maxBalloons) {
        setPumps(0);
        setTempEarnings(0);
        setBalloonNumber(balloonNumber + 1);
        setIsPopped(false);
      } else {
        if (gameState === 'demo') {
          setGameState('ended');
          setPumps(0);
          setTempEarnings(0);
          setBalloonNumber(1);
        } else {
          setGameState('gameEnd');
        }
      }
    }
  };

  // Calculate scale based on pumps (1.0 to 2.0 over a reference max, e.g., 60)
  const balloonScale = isPopped ? 1 : 1 + (pumps / 60) * 1; // Scales from 1x to 2x

  return (
    <div className="balloon-desktop">
      <div className="balloon-group-20937">
        <div className="balloon-rectangle-746"></div>
        <div className="balloon-rectangle-745"></div>
      </div>
      <div className="balloon-image-19-1" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="balloon-image-19-2" style={{ backgroundImage: `url(${image19})` }}></div>
      {(gameState === 'demo' || gameState === 'real') && (
        <>
          <div
            className={`balloon-image-4 ${isPopped ? 'popped' : ''}`}
            style={{
              backgroundImage: `url(${isPopped ? poppedBalloonImage : balloonImage})`,
              transform: `scale(${balloonScale})`,
              transition: 'transform 0.3s ease',
            }}
          ></div>
          {isPopped && (
            <div className="balloon-popped-message">
              {language === 'es' ? '¡El globo explotó!' : 'Balloon Popped!'}
            </div>
          )}
          <div className="balloon-rectangle-744">
            <div className="balloon-group-20909">
              <div className="balloon-balloon-number">
                {gameState === 'demo'
                  ? language === 'es'
                    ? `Globo número: ${balloonNumber} de 5 (Demostración)`
                    : `Balloon number: ${balloonNumber} of 5 (Demo)`
                  : language === 'es'
                  ? `Globo número: ${balloonNumber} de 30`
                  : `Balloon number: ${balloonNumber} of 30`}
              </div>
              <div className="balloon-potential-earnings">
                {language === 'es' ? 'Ganancias potenciales' : 'Potential earnings'}: ${tempEarnings.toFixed(2)}
              </div>
              <div className="balloon-number-pumps">
                {language === 'es' ? 'Número de inflados' : 'Number of pumps'}: {pumps}
              </div>
              <div className="balloon-total-winnings">
                {language === 'es' ? 'Ganancias totales' : 'Total Winnings'}: ${totalEarnings.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="balloon-group-20934">
            <button className="balloon-button-danger" onClick={handlePump} disabled={isPopped}>
              <span className="balloon-button-text">
                {language === 'es' ? 'Inflar el globo' : 'Pump the balloon'}
              </span>
            </button>
            <button className="balloon-button-collect" onClick={handleCollect} disabled={isPopped}>
              <span className="balloon-button-text">
                {language === 'es' ? 'Recolectar $$$' : 'Collect $$$'}
              </span>
            </button>
          </div>
        </>
      )}
      {gameState === 'ended' && (
        <div className="balloon-game-ended-container" style={{ position: 'relative' }}>
          <div
            className="balloon-image-19-2"
            style={{ backgroundImage: `url(${image19})`, position: 'absolute', top: '0', left: '0', zIndex: -1 }}
          ></div>
          <div
            className="balloon-image-19-1"
            style={{ backgroundImage: `url(${image19})`, position: 'absolute', top: '68.99px', left: '116.27px', zIndex: 0 }}
          ></div>
          <h2>{language === 'es' ? 'Demostración Terminada' : 'Demo Game Ended'}</h2>
          <p>{language === 'es' ? '¿Listo para jugar el juego real?' : 'Ready to play the real game?'}</p>
          <button
            className="balloon-start-real-game-btn"
            onClick={() => {
              setTotalEarnings(0); // Reset earnings for real game
              setPumps(0);
              setTempEarnings(0);
              setBalloonNumber(1);
              setIsPopped(false);
              setGameState('real');
            }}
          >
            {language === 'es' ? 'Iniciar Juego Real' : 'Start Real Game'}
          </button>
        </div>
      )}
      {gameState === 'gameEnd' && (
        <div className="balloon-end-game-content">
          {language === 'es' ? (
            <>
              <h1 className="balloon-end-game-title">Felicitaciones</h1>
              <p className="balloon-end-game-text">Juego de Globos</p>
              <p className="balloon-end-game-text">Puntuación: ${totalEarnings.toFixed(2)}</p>
              <p className="balloon-end-game-text">Muchas gracias por completar la actividad.</p>
              <button className="balloon-end-game-button" onClick={() => {}}>
                <span className="balloon-end-game-button-text">OK</span>
              </button>
              <button
                className="balloon-end-game-button"
                onClick={() => navigate('/activities')}
                style={{ marginTop: '20px' }}
              >
                <span className="balloon-end-game-button-text">Volver al menú del juego</span>
              </button>
            </>
          ) : (
            <>
              <h1 className="balloon-end-game-title">Congratulations</h1>
              <p className="balloon-end-game-text">Balloon Game</p>
              <p className="balloon-end-game-text">Score: ${totalEarnings.toFixed(2)}</p>
              <p className="balloon-end-game-text">Thank you very much for completing the activity.</p>
              <button className="balloon-end-game-button" onClick={() => {}}>
                <span className="balloon-end-game-button-text">OK</span>
              </button>
              <button
                className="balloon-end-game-button"
                onClick={() => navigate('/activities')}
                style={{ marginTop: '20px' }}
              >
                <span className="balloon-end-game-button-text">Go Back to Game Menu</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BalloonGame;