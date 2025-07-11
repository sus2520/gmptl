import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../DigitSymbolTest.css';
import image19 from '../assets/image19.png';

const DigitSymbolTest = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/jspsych@8.2.1/build/jspsych.js';
    script.async = true;
    script.onload = () => {
      const jsPsych = window.jsPsych;
      const timeline = [
        {
          type: jsPsychHtmlKeyboardResponse,
          stimulus: '<div className="digit-symbol-key">Key Mapping: 1=* 2=# 3=@ 4=$ 5=% 6=+ 7=! 8=/ 9=?</div><p>Press any key to start.</p>',
          choices: 'ALL_KEYS'
        },
        ...['*', '#', '@', '$', '%', '+', '!', '/', '?'].map((symbol, index) => ({
          type: jsPsychHtmlKeyboardResponse,
          stimulus: `<div className="digit-symbol-current">[Current Symbol: ${symbol}]</div><p>Press ${index + 1}.</p>`,
          choices: [String(index + 1)],
          data: { correct_response: String(index + 1) },
          on_finish: (data) => {
            data.correct = data.response === String(index + 1);
          }
        }))
      ];
      jsPsych.init({
        timeline: timeline,
        on_finish: () => {
          setTimeout(() => navigate('/game-end'), 5000);
        }
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [navigate]);

  return (
    <div className="digit-symbol-desktop">
      <div className="digit-symbol-group-20937">
        <div className="digit-symbol-rectangle-746"></div>
        <div className="digit-symbol-rectangle-745"></div>
      </div>
      <div className="digit-symbol-image-19-1" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="digit-symbol-image-19-2" style={{ backgroundImage: `url(${image19})` }}></div>
      <div id="jspsych-target" className="digit-symbol-rectangle-744"></div>
    </div>
  );
};

export default DigitSymbolTest;