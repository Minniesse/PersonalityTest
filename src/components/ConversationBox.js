import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ConversationBox.css';

const ConversationBox = ({ question, onAnswerSelected }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    hover: { 
      scale: 1.03,
      backgroundColor: "#4a6741",
      color: "white",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div 
      className="chat-app-frame"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="chat-header">
        <div className="chat-avatar">
          <img 
            src="/fox-guide.png" 
            alt="Fox Guide" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/40?text=Fox";
            }}
          />
        </div>
        <div className="chat-title">Personality Test</div>
      </div>
      
      <div className="chat-body">
        <motion.div 
          className="scene-card"
          variants={itemVariants}
        >
          <h3 className="scene-title">{question.title}</h3>
          <p className="scene-description">{question.sceneDescription}</p>
        </motion.div>

        <motion.div 
          className="message-bubble guide-bubble"
          variants={itemVariants}
        >
          <p>{question.dialogText}</p>
        </motion.div>

        <motion.div className="answers-container" variants={itemVariants}>
          {question.answers.map((answer, index) => (
            <motion.button 
              key={index} 
              className="answer-option"
              onClick={() => onAnswerSelected(answer.points)}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              custom={index}
              transition={{ delay: index * 0.1 }}
            >
              {answer.text}
            </motion.button>
          ))}
        </motion.div>
      </div>
      
      <div className="chat-footer">
        <div className="footer-buttons">
          <div className="action-button"></div>
          <div className="action-button"></div>
          <div className="action-button active"></div>
          <div className="action-button"></div>
          <div className="action-button"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConversationBox;
