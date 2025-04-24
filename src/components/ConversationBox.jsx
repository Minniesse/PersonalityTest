import React from 'react';
import { motion } from 'framer-motion';

const ConversationBox = ({ question, onAnswerSelected, questionNumber, totalQuestions, progressPercentage }) => {
  return (
    <div className="conversation-box">
      <div className="conversation-content">
        <h3 className="question-text">{question.questionText}</h3>
        
        <div className="answer-options">
          {question.answers.map((answer, index) => (
            <motion.button
              key={index}
              className="answer-button"
              onClick={() => onAnswerSelected(answer.points)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {answer.text}
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Progress bar at bottom of the conversation box */}
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress-filled" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <p className="progress-text">Question {questionNumber} of 15</p>
      </div>
    </div>
  );
};

export default ConversationBox;