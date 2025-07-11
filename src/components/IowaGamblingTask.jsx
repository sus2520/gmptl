import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { JsPsych, SurveyHtml, HtmlButtonResponse } from 'react-jspsych';
import '../IowaGamblingTask.css';
import image19 from '../assets/image19.png';

const IowaGamblingTask = () => {
  const navigate = useNavigate();

  const timeline = [
    {
      type: SurveyHtml,
      preamble: '<p>Instructions: Click a deck to draw. High rewards/penalties in some, maximize virtual money over time.</p>',
      button_label: 'Start'
    },
    {
      type: HtmlButtonResponse,
      stimulus: ['A', 'B', 'C', 'D'].map(deck => `<div className="iowa-gambling-decks">[Deck ${deck}]</div>`).join(''),
      choices: ['A', 'B', 'C', 'D'],
      data: { deck: 'A' },
      on_finish: (data) => {
        data.reward = Math.floor(Math.random() * 100) - 50;
      }
    }
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
    <div className="iowa-gambling-desktop">
      <div className="iowa-gambling-group-20937">
        <div className="iowa-gambling-rectangle-746"></div>
        <div className="iowa-gambling-rectangle-745"></div>
      </div>
      <div className="iowa-gambling-image-19-1" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="iowa-gambling-image-19-2" style={{ backgroundImage: `url(${image19})` }}></div>
      <div id="jspsych-target" className="iowa-gambling-rectangle-744"></div>
    </div>
  );
};

export default IowaGamblingTask;