import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { JsPsych, SurveyHtml, ImageKeyboardResponse } from 'react-jspsych';
import './MentalRotation.css';
import image19 from '../assets/image19.png';

const MentalRotation = () => {
  const navigate = useNavigate();

  const trials = [
    { stimulus: '/assets/shape1.png', match: true, correct_response: 's' },
    { stimulus: '/assets/shape2.png', match: false, correct_response: 'm' }
  ];

  const timeline = [
    {
      type: SurveyHtml,
      preamble: '<p>Instructions: Press S for Same, M for Mirror. Respond quickly and accurately.</p>',
      button_label: 'Start'
    },
    ...trials.map((trial) => ({
      type: ImageKeyboardResponse,
      stimulus: trial.stimulus,
      choices: ['s', 'm'],
      data: { correct_response: trial.correct_response },
      on_finish: (data) => {
        data.correct = data.response === trial.correct_response;
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
    <div className="mental-rotation-desktop">
      <div className="mental-rotation-group-20937">
        <div className="mental-rotation-rectangle-746"></div>
        <div className="mental-rotation-rectangle-745"></div>
      </div>
      <div className="mental-rotation-image-19-1" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="mental-rotation-image-19-2" style={{ backgroundImage: `url(${image19})` }}></div>
      <div id="jspsych-target" className="mental-rotation-rectangle-744"></div>
    </div>
  );
};

export default MentalRotation;