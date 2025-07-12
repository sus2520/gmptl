import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../DigitSymbolTest.css';
import image19 from '../assets/image19.png';
import { JsPsych, initJsPsych } from 'jspsych';
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
import { LanguageContext } from './LanguageContext';

const DigitSymbolTest = () => {
  const [gameState, setGameState] = useState('trial'); // trial, ended, real, gameEnd
  const [realGameScore, setRealGameScore] = useState(0); // Track real game earnings
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const startTrial = () => {
    const jsPsych = initJsPsych({
      display_element: 'jspsych-target',
      on_finish: () => {
        console.log('Trial game finished after Trial 9/9');
        setGameState('ended');
      },
    });

    const timeline = [
      {
        type: htmlKeyboardResponse,
        stimulus: `
          <div class="digit-symbol-key-container">
            <h2>Symbol Key (Trial)</h2>
            <p class="digit-symbol-key">1=* 2=# 3=@ 4=$ 5=% 6=+ 7=! 8=/ 9=?</p>
            <p>Press any key to start.</p>
          </div>`,
        choices: 'ALL_KEYS',
      },
      ...['*', '#', '@', '$', '%', '+', '!', '/', '?'].map((symbol, index) => ({
        type: htmlKeyboardResponse,
        stimulus: `
          <div class="digit-symbol-trial">
            <div class="digit-symbol-current">Symbol: ${symbol}</div>
            <p>Press <span class="key-highlight">${index + 1}</span></p>
            <div class="progress">Trial ${index + 1} of 9</div>
          </div>`,
        choices: [String(index + 1)],
        data: { correct_response: String(index + 1), trial_number: index + 1 },
        on_finish: (data) => {
          data.correct = data.response === String(index + 1);
          console.log(`Trial ${index + 1} result:`, data);
          const target = document.getElementById('jspsych-target');
          target.classList.add(data.correct ? 'correct' : 'incorrect');
          setTimeout(() => target.classList.remove('correct', 'incorrect'), 500);
          if (data.trial_number === 9) {
            console.log('Reached Trial 9/9, setting gameState to ended');
            setGameState('ended');
          }
        },
      })),
    ];

    try {
      jsPsych.run(timeline);
    } catch (error) {
      console.error('jsPsych initialization error:', error);
    }
  };

  const startRealGame = () => {
    let currentScore = 0; // Track real-time score
    const jsPsych = initJsPsych({
      display_element: 'jspsych-target',
      on_finish: () => {
        console.log(`Real game finished. Total score: ${currentScore}`);
        setRealGameScore(currentScore);
        setGameState('gameEnd');
      },
    });

    const timeline = [
      {
        type: htmlKeyboardResponse,
        stimulus: `
          <div class="digit-symbol-key-container">
            <h2>Symbol Key</h2>
            <p class="digit-symbol-key">1=* 2=# 3=@ 4=$ 5=% 6=+ 7=! 8=/ 9=?</p>
            <p>Press any key to start.</p>
          </div>`,
        choices: 'ALL_KEYS',
      },
      ...['*', '#', '@', '$', '%', '+', '!', '/', '?'].map((symbol, index) => ({
        type: htmlKeyboardResponse,
        stimulus: `
          <div class="digit-symbol-trial">
            <div class="digit-symbol-current">Symbol: ${symbol}</div>
            <p>Press <span class="key-highlight">${index + 1}</span></p>
            <div class="progress-trial">
              <span class="progress">${index + 1} of 9</span>
              <span class="earnings-display">Earnings: ${currentScore}</span>
            </div>
          </div>`,
        choices: [String(index + 1)],
        data: { correct_response: String(index + 1), trial_number: index + 1 },
        on_finish: (data) => {
          data.correct = data.response === String(index + 1);
          console.log(`Real Game ${index + 1} result:`, data);
          if (data.correct) {
            currentScore += 1; // Increment score for correct response
          }
          const target = document.getElementById('jspsych-target');
          target.classList.add(data.correct ? 'correct' : 'incorrect');
          setTimeout(() => target.classList.remove('correct', 'incorrect'), 500);
        },
      })),
    ];

    try {
      jsPsych.run(timeline);
    } catch (error) {
      console.error('jsPsych initialization error:', error);
    }
  };

  useEffect(() => {
    if (gameState === 'trial') {
      startTrial();
    } else if (gameState === 'real') {
      startRealGame();
    }
  }, [gameState]);

  return (
    <div className="digit-symbol-desktop">
      <div className="digit-symbol-group-20937">
        <div className="digit-symbol-rectangle-746"></div>
        <div className="digit-symbol-rectangle-745"></div>
      </div>
      <div className="digit-symbol-image-19-1" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="digit-symbol-image-19-2" style={{ backgroundImage: `url(${image19})` }}></div>
      <div id="jspsych-target" className="digit-symbol-rectangle-744">
        {gameState === 'ended' && (
          <div className="game-ended-container" style={{ position: 'relative' }}>
            <div
              className="digit-symbol-image-19-2"
              style={{ backgroundImage: `url(${image19})`, position: 'absolute', top: 0, left: 0, zIndex: -1 }}
            ></div>
            <h2>Trial Game Ended</h2>
            <p>Ready to play the real game?</p>
            <button
              className="start-real-game-btn"
              onClick={() => {
                setRealGameScore(0); // Reset score for new real game
                setGameState('real');
              }}
            >
              Start Real Game
            </button>
          </div>
        )}
        {gameState === 'gameEnd' && (
          <div className="end-game-content">
            {language === 'es' ? (
              <>
                <h1 className="end-game-title">Felicitaciones</h1>
                <p className="end-game-text">Prueba de Símbolos y Dígitos</p>
                <p className="end-game-text">Puntuación: {realGameScore}/9</p>
                <p className="end-game-text">Muchas gracias por completar la actividad.</p>
                <button className="end-game-button" onClick={() => {}}>
                  <span className="end-game-button-text">OK</span>
                </button>
                <button className="end-game-button" onClick={() => navigate('/activities')} style={{ marginTop: '20px' }}>
                  <span className="end-game-button-text">Volver al menú del juego</span>
                </button>
              </>
            ) : (
              <>
                <h1 className="end-game-title">Congratulations</h1>
                <p className="end-game-text">Digit Symbol Test</p>
                <p className="end-game-text">Score: {realGameScore}/9</p>
                <p className="end-game-text">Thank you very much for completing the activity.</p>
                <button className="end-game-button" onClick={() => {}}>
                  <span className="end-game-button-text">OK</span>
                </button>
                <button className="end-game-button" onClick={() => navigate('/activities')} style={{ marginTop: '20px' }}>
                  <span className="end-game-button-text">Go Back to Game Menu</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitSymbolTest;