import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../DigitSymbolTest.css';
import image19 from '../assets/image19.png';

const DigitSymbolTest = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jsPsychScript = document.createElement('script');
    jsPsychScript.src = 'https://cdn.jsdelivr.net/npm/jspsych@8.2.1/dist/jspsych.js';
    jsPsychScript.async = true;

    const pluginScript = document.createElement('script');
    pluginScript.src = 'https://cdn.jsdelivr.net/npm/@jspsych/plugin-html-keyboard-response@1.1.1/dist/index.min.js';
    pluginScript.async = true;

    let isLoaded = false;

    const onLoad = () => {
      if (isLoaded) return;
      isLoaded = true;

      if (window.jsPsych && window.jsPsych.plugins['html-keyboard-response']) {
        console.log('jsPsych and plugin loaded successfully');
        const jsPsych = window.jsPsych;
        const timeline = [
          {
            type: jsPsych.plugins['html-keyboard-response'],
            stimulus: '<div className="digit-symbol-key">Key Mapping: 1=* 2=# 3=@ 4=$ 5=% 6=+ 7=! 8=/ 9=?</div><p>Press any key to start.</p>',
            choices: 'ALL_KEYS'
          },
          ...['*', '#', '@', '$', '%', '+', '!', '/', '?'].map((symbol, index) => ({
            type: jsPsych.plugins['html-keyboard-response'],
            stimulus: `<div className="digit-symbol-current">[Current Symbol: ${symbol}]</div><p>Press ${index + 1}.</p>`,
            choices: [String(index + 1)],
            data: { correct_response: String(index + 1) },
            on_finish: (data) => {
              data.correct = data.response === String(index + 1);
              console.log(`Trial ${index + 1} result:`, data);
            }
          }))
        ];

        try {
          jsPsych.init({
            timeline: timeline,
            on_finish: () => {
              console.log('Game finished');
              setTimeout(() => navigate('/game-end'), 5000);
            }
          });
        } catch (error) {
          console.error('jsPsych initialization error:', error);
        }
      } else {
        console.error('jsPsych or plugin not loaded');
      }
    };

    jsPsychScript.onload = () => {
      document.body.appendChild(pluginScript);
    };
    pluginScript.onload = onLoad;

    jsPsychScript.onerror = () => console.error('Failed to load jsPsych script');
    pluginScript.onerror = () => console.error('Failed to load html-keyboard-response plugin');

    document.body.appendChild(jsPsychScript);

    return () => {
      document.body.removeChild(jsPsychScript);
      document.body.removeChild(pluginScript);
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