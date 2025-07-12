import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './GoNoGoTask.css';
import image19 from './assets/image19.png';
import { JsPsych, initJsPsych } from 'jspsych';
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
import { LanguageContext } from './LanguageContext';

const GoNoGoTask = () => {
  const [gameState, setGameState] = useState('trial'); // trial, ended, real, gameEnd
  const [realGameScore, setRealGameScore] = useState(0); // Track real game earnings
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const startTrial = () => {
    const jsPsych = initJsPsych({
      display_element: 'jspsych-target',
      on_finish: () => {
        console.log('Trial game finished after Trial 5/5');
        setGameState('ended');
      },
    });

    const timeline = [
      {
        type: htmlKeyboardResponse,
        stimulus: `
          <div class="go-nogo-key-container">
            <h2>Instructions (Trial)</h2>
            <p>Press <span class="key-highlight">SPACE</span> for GREEN circle, do NOT press for RED circle.</p>
            <p>Press any key to start.</p>
          </div>`,
        choices: 'ALL_KEYS',
      },
      ...['green', 'red', 'green', 'red', 'green'].map((color, index) => ({
        type: htmlKeyboardResponse,
        stimulus: `
          <div class="go-nogo-trial">
            <div class="go-nogo-stimulus go-nogo-${color}"></div>
            <div class="progress">Trial ${index + 1} of 5</div>
          </div>`,
        choices: ['space'],
        trial_duration: 1000,
        data: { correct_response: color === 'green' ? 'space' : null, trial_number: index + 1 },
        on_finish: (data) => {
          data.correct = (color === 'green' && data.response === 'space') || (color === 'red' && data.response === null);
          console.log(`Trial ${index + 1} result:`, data);
          const target = document.getElementById('jspsych-target');
          target.classList.add(data.correct ? 'correct' : 'incorrect');
          setTimeout(() => target.classList.remove('correct', 'incorrect'), 500);
          if (data.trial_number === 5) {
            console.log('Reached Trial 5/5, setting gameState to ended');
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
          <div class="go-nogo-key-container">
            <h2>Instructions</h2>
            <p>Press <span class="key-highlight">SPACE</span> for GREEN circle, do NOT press for RED circle.</p>
            <p>Press any key to start.</p>
          </div>`,
        choices: 'ALL_KEYS',
      },
      ...['green', 'red', 'green', 'red', 'green'].map((color, index) => ({
        type: htmlKeyboardResponse,
        stimulus: `
          <div class="go-nogo-trial">
            <div class="go-nogo-stimulus go-nogo-${color}"></div>
            <div class="progress-trial">
              <span class="progress">Trial ${index + 1} of 5</span>
              <span class="earnings-display">Earnings: ${currentScore}</span>
            </div>
          </div>`,
        choices: ['space'],
        trial_duration: 1000,
        data: { correct_response: color === 'green' ? 'space' : null, trial_number: index + 1 },
        on_finish: (data) => {
          data.correct = (color === 'green' && data.response === 'space') || (color === 'red' && data.response === null);
          console.log(`Real Game Trial ${index + 1} result:`, data);
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
    <div className="go-nogo-desktop">
      <div className="go-nogo-group-20937">
        <div className="go-nogo-rectangle-746"></div>
        <div className="go-nogo-rectangle-745"></div>
      </div>
      <div className="go-nogo-image-19-1" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="go-nogo-image-19-2" style={{ backgroundImage: `url(${image19})` }}></div>
      <div id="jspsych-target" className="go-nogo-rectangle-744">
        {gameState === 'ended' && (
          <div className="game-ended-container">
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
                <p className="end-game-text">Tarea de Go/No-Go</p>
                <p className="end-game-text">Puntuación: {realGameScore}/5</p>
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
                <p className="end-game-text">Go/No-Go Task</p>
                <p className="end-game-text">Score: {realGameScore}/5</p>
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

export default GoNoGoTask;