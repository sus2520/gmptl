import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import '../balloondemo.css';
import logoImage from '../assets/image19.png';
import balloonImage from '../assets/image [Background removed] [Upscaled].png';
import poppedBalloonImage from '../assets/popped_balloon.png';

export default function BalloonDemo() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [pumps, setPumps] = useState(0);
  const [tempEarnings, setTempEarnings] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [balloonNumber, setBalloonNumber] = useState(1);
  const [isPopped, setIsPopped] = useState(false);
  const [burstPoint, setBurstPoint] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const content = {
    es: {
      title: 'Demostración de Globos',
      gameOver: '¡Juego Terminado!',
      balloonNumber: 'Número de globo: {number} de 30',
      potentialEarnings: 'Ganancias potenciales: ${amount}',
      numberPumps: 'Número de bombeos: {pumps}',
      totalWinnings: 'Ganancias totales: ${amount}',
      pumpButtonText: 'Bombear el globo',
      collectButtonText: 'Recolectar $$$',
      pumpButtonAriaLabel: 'Bombear el globo',
      collectButtonAriaLabel: 'Recolectar ganancias',
      poppedMessage: '¡El globo explotó!',
      startGameButtonText: 'Iniciar Juego',
      startGameButtonAriaLabel: 'Iniciar el juego real',
    },
    en: {
      title: 'Balloon Demo',
      gameOver: 'Game Over!',
      balloonNumber: 'Balloon number: {number} of 30',
      potentialEarnings: 'Potential earnings: ${amount}',
      numberPumps: 'Number of pumps: {pumps}',
      totalWinnings: 'Total Winnings: ${amount}',
      pumpButtonText: 'Pump the balloon',
      collectButtonText: 'Collect $$$',
      pumpButtonAriaLabel: 'Pump the balloon',
      collectButtonAriaLabel: 'Collect earnings',
      poppedMessage: 'Balloon Popped!',
      startGameButtonText: 'Start Game',
      startGameButtonAriaLabel: 'Start the real game',
    },
  };

  const generateBurstPoint = (balloonNum) => {
    if (balloonNum <= 10) {
      return Math.floor(Math.random() * 25) + 1; // 1–25
    } else if (balloonNum <= 20) {
      return Math.floor(Math.random() * 40) + 1; // 1–40
    } else {
      return Math.floor(Math.random() * 60) + 1; // 1–60
    }
  };

  useEffect(() => {
    setBurstPoint(generateBurstPoint(balloonNumber));
  }, [balloonNumber]);

  const handlePump = () => {
    if (pumps < burstPoint && !isPopped) {
      setPumps(pumps + 1);
      setTempEarnings(tempEarnings + 0.05);
    } else {
      setIsPopped(true);
      setTempEarnings(0);
      setTimeout(() => {
        if (balloonNumber < 30) {
          setPumps(0);
          setBalloonNumber(balloonNumber + 1);
          setIsPopped(false);
        } else {
          setGameOver(true);
        }
      }, 2000);
    }
  };

  const handleCollect = () => {
    if (!isPopped) {
      setTotalEarnings(totalEarnings + tempEarnings);
      if (balloonNumber < 30) {
        setPumps(0);
        setTempEarnings(0);
        setBalloonNumber(balloonNumber + 1);
        setIsPopped(false);
      } else {
        setGameOver(true);
      }
    }
  };

  const handleStartGame = () => {
    navigate('/game-complete', { state: { totalEarnings } });
  };

  const balloonScale = isPopped ? 1 : 1 + (pumps / 60) * 1;

  if (gameOver) {
    return (
      <div className="desktop">
        <div className="game-over">
          <h1>{content[language].gameOver}</h1>
          <p>{content[language].totalWinnings.replace('{amount}', totalEarnings.toFixed(2))}</p>
          <button
            className="button-collect"
            onClick={handleStartGame}
            aria-label={content[language].startGameButtonAriaLabel}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleStartGame()}
          >
            <span className="button-text">{content[language].startGameButtonText}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="desktop">
      <div className="group-20937">
        <div className="rectangle-746"></div>
        <div className="rectangle-745"></div>
      </div>
      <div className="image-19-1" style={{ backgroundImage: `url(${logoImage})` }}></div>
      <div className="image-19-2" style={{ backgroundImage: `url(${logoImage})` }}></div>
      <div
        className={`image-4 ${isPopped ? 'popped' : ''}`}
        style={{
          backgroundImage: `url(${isPopped ? poppedBalloonImage : balloonImage})`,
          transform: `scale(${balloonScale})`,
          transition: 'transform 0.3s ease',
        }}
      ></div>
      {isPopped && (
        <div className="popped-message">
          {content[language].poppedMessage}
        </div>
      )}
      <div className="rectangle-744">
        <div className="group-20909">
          <div className="balloon-number">
            {content[language].balloonNumber.replace('{number}', balloonNumber)}
          </div>
          <div className="potential-earnings">
            {content[language].potentialEarnings.replace('{amount}', tempEarnings.toFixed(2))}
          </div>
          <div className="number-pumps">
            {content[language].numberPumps.replace('{pumps}', pumps)}
          </div>
          <div className="total-winnings">
            {content[language].totalWinnings.replace('{amount}', totalEarnings.toFixed(2))}
          </div>
        </div>
      </div>
      <div className="group-20934">
        <button
          className="button-danger"
          onClick={handlePump}
          disabled={isPopped}
          aria-label={content[language].pumpButtonAriaLabel}
        >
          <span className="button-text">{content[language].pumpButtonText}</span>
        </button>
        <button
          className="button-collect"
          onClick={handleCollect}
          disabled={isPopped}
          aria-label={content[language].collectButtonAriaLabel}
        >
          <span className="button-text">{content[language].collectButtonText}</span>
        </button>
      </div>
    </div>
  );
}