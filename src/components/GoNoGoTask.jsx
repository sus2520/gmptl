import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { JsPsych, SurveyHtml, HtmlKeyboardResponse } from 'react-jspsych';
import '../GoNoGoTask.css';
import image19 from '../assets/image19.png';

const GoNoGoTask = () => {
  const navigate = useNavigate();

  const trials = [
    { stimulus: 'X', correct_response: ' ' },
    { stimulus: 'Y', correct_response: '' },
    { stimulus: 'X', correct_response: ' ' },
    { stimulus: 'Y', correct_response: '' }
  ];

  const timeline = [
    {
      type: SurveyHtml,
      preamble: '<p>Instructions: Press space for \'X\' (Go), do not press for \'Y\' (No-Go). Respond quickly and accurately.</p>',
      button_label: 'Start'
    },
    ...trials.map((trial) => ({
      type: HtmlKeyboardResponse,
      stimulus: `<div className="go-no-go-current">[Current Stimulus: ${trial.stimulus}]</div>`,
      choices: trial.correct_response ? [' '] : [],
      data: { correct_response: trial.correct_response },
      on_finish: (data) => {
        data.correct = trial.correct_response ? data.response === ' ' : !data.response;
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
    <div className="go-no-go-desktop">
      <div className="go-no-go-group-20937">
        <div className="go-no-go-rectangle-746"></div>
        <div className="go-no-go-rectangle-745"></div>
      </div>
      <div className="go-no-go-image-19-1" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="go-no-go-image-19-2" style={{ backgroundImage: `url(${image19})` }}></div>
      <div id="jspsych-target" className="go-no-go-rectangle-744"></div>
    </div>
  );
};

export default GoNoGoTask;