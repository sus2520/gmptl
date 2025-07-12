import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { JsPsych, SurveyHtml, HtmlKeyboardResponse } from 'react-jspsych';
import '../NBackTask.css';
import image19 from '../assets/image19.png';

const NBackTask = () => {
  const navigate = useNavigate();

  const sequence = ['A', 'B', 'C', 'A', 'D'];
  const n = 2;
  const timeline = [
    {
      type: SurveyHtml,
      preamble: '<p>Instructions: Press space for n-back match (e.g., A-C-A). Focus on sequence.</p>',
      button_label: 'Start'
    },
    ...sequence.map((item, index) => {
      const prevItems = sequence.slice(Math.max(0, index - n), index);
      const match = prevItems.includes(item);
      return {
        type: HtmlKeyboardResponse,
        stimulus: `<div className="n-back-sequence">[Current: ${item}] [Previous: ${prevItems.join(' ')}]</div>`,
        choices: match ? [' '] : [],
        data: { correct_response: match ? ' ' : '' },
        on_finish: (data) => {
          data.correct = match ? data.response === ' ' : !data.response;
        }
      };
    })
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
    <div className="n-back-desktop">
      <div className="n-back-group-20937">
        <div className="n-back-rectangle-746"></div>
        <div className="n-back-rectangle-745"></div>
      </div>
      <div className="n-back-image-19-1" style={{ backgroundImage: `url(${image19})` }}></div>
      <div className="n-back-image-19-2" style={{ backgroundImage: `url(${image19})` }}></div>
      <div id="jspsych-target" className="n-back-rectangle-744"></div>
    </div>
  );
};

export default NBackTask;