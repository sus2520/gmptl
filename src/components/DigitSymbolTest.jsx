import React, { useEffect, useState } from 'react';
import '../DigitSymbolTest.css';
import image19 from '../assets/image19.png';
import { JsPsych, initJsPsych } from 'jspsych';
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';

const DigitSymbolTest = () => {
  const [gameState, setGameState] = useState('trial'); // trial, ended, real

  const startTrial = () => {
    const jsPsych = initJsPsych({
      display_element: 'jspsych-target',
      on_finish: () => {
        console.log('Trial game finished');
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
    const jsPsych = initJsPsych({
      display_element: 'jspsych-target',
      on_finish: () => {
        console.log('Real game finished');
        setGameState('ended');
      },
    });

    const timeline = [
      {
        type: htmlKeyboardResponse,
        stimulus: `
          <div class="digit-symbol-key-container">
            <h2>Symbol Key (Real Game)</h2>
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
          console.log(`Real Game Trial ${index + 1} result:`, data);
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
          <div className="game-ended-container">
            <h2>Trial Game Ended</h2>
            <p>Ready to play the real game?</p>
            <button
              className="start-real-game-btn"
              onClick={() => setGameState('real')}
            >
              Start Real Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitSymbolTest;