import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { JsPsych, SurveyHtml, HtmlKeyboardResponse } from 'react-jspsych';
import './DigitSymbolTest.css';
import image19 from '../assets/image19.png';

const DigitSymbolTest = () => {
  const navigate = useNavigate();

  const trialData = [
    { digit: '1', symbol: '*' }, { digit: '2', symbol: '#' }, { digit: '3', symbol: '@' },
    { digit: '4', symbol: '$' }, { digit: '5', symbol: '%' }, { digit: '6', symbol: '+' },
    { digit: '7', symbol: '!' }, { digit: '8', symbol: '/' }, { digit: '9', symbol: '?' }
  ];

  const timeline = [
    {
      type: SurveyHtml,
      preamble: `
        <div className="digit-symbol-key">Key Mapping: 1=* 2=# 3=@ 4=$ 5=% 6=+ 7=! 8=/ 9=?</div>
      `,
      button_label: 'Start'
    },
    ...trialData.map((item) => ({
      type: HtmlKeyboardResponse,
      stimulus: `
        <div className="digit-symbol-current">[Current Symbol: ${item.symbol}]</div>
        <p>Press the corresponding digit (1-9).</p>
      `,
      choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      data: { correct_response: item.digit },
      on_finish: (data) => {
        data.correct = data.response === item.digit;
      }
    }))
  ];

  useEffect(() => {
    const jsPsych = new JsPsych({
      on_finish: () => {
        setTimeout(() => navigate('/game-end'), 5000);
      }
    });
    jsPsych.run(timeline);
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