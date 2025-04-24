import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import questions from './data/questions';
import animalProfiles from './data/animalProfiles';
import ConversationBox from './components/ConversationBox';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    Lion: 0,
    Wolf: 0,
    Owl: 0,
    Fox: 0,
    Bear: 0,
    Dolphin: 0,
    Eagle: 0, // Eagle/Hawk
    Beaver: 0,
    Cat: 0,
    Otter: 0,
    Deer: 0,
    Turtle: 0
  });
  const [showResults, setShowResults] = useState(false);
  const [primaryAnimal, setPrimaryAnimal] = useState(null);
  const [secondaryAnimal, setSecondaryAnimal] = useState(null);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const handleAnswer = (answerPoints) => {
    // Update scores based on the answer
    const newScores = { ...scores };
    
    // Add points to the respective animal types
    Object.entries(answerPoints).forEach(([animal, points]) => {
      if (newScores[animal] !== undefined) {
        newScores[animal] += points;
      }
    });
    
    setScores(newScores);
    setDirection(1); // Set direction to forward
    
    // Move to the next question or show results
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults(newScores);
      setShowResults(true);
    }
  };

  const calculateResults = (finalScores) => {
    // Sort animals by score to find the primary and secondary types
    const sortedAnimals = Object.entries(finalScores)
      .sort((a, b) => b[1] - a[1]);
    
    setPrimaryAnimal(sortedAnimals[0][0]);
    setSecondaryAnimal(sortedAnimals[1][0]);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScores({
      Lion: 0,
      Wolf: 0,
      Owl: 0,
      Fox: 0,
      Bear: 0,
      Dolphin: 0,
      Eagle: 0,
      Beaver: 0,
      Cat: 0,
      Otter: 0,
      Deer: 0,
      Turtle: 0
    });
    setShowResults(false);
    setPrimaryAnimal(null);
    setSecondaryAnimal(null);
    setDirection(1);
  };

  // Animation variants
  const pageVariants = {
    initial: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  return (
    <div className="App">
      <main className="App-main">
        <AnimatePresence mode="wait" custom={direction}>
          {!showResults ? (
            <motion.div
              key="quiz"
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <QuizSection 
                question={questions[currentQuestionIndex]} 
                onAnswerSelected={handleAnswer}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
              />
            </motion.div>
          ) : (
            <motion.div
              key="results"
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ResultsSection 
                primaryAnimal={primaryAnimal}
                secondaryAnimal={secondaryAnimal}
                animalProfiles={animalProfiles}
                onRestart={restartQuiz}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
    </div>
  );
}

function QuizSection({ question, onAnswerSelected, questionNumber, totalQuestions }) {
  return (
    <div className="quiz-container">
      <ConversationBox 
        question={question} 
        onAnswerSelected={onAnswerSelected}
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
        progressPercentage={(questionNumber / totalQuestions) * 100}
      />
    </div>
  );
}

function ResultsSection({ primaryAnimal, secondaryAnimal, animalProfiles, onRestart }) {
  const primaryProfile = animalProfiles[primaryAnimal];
  const secondaryProfile = animalProfiles[secondaryAnimal];
  
  // Animation variants for results elements
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
  
  return (
    <div className="quiz-container">
      <motion.div 
        className="results-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ 
          maxWidth: '700px',
          margin: '0 auto',
          backgroundColor: '#fff9e6',
          borderRadius: '20px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          padding: '30px',
          maxHeight: '90vh',
          overflow: 'auto'
        }}
      >
        <motion.div variants={itemVariants}>
          <h2 style={{ color: '#4a6741', textAlign: 'center', marginBottom: '24px' }}>
            Your Animal Spirit Revealed!
          </h2>
          <p style={{ fontStyle: 'italic', textAlign: 'center', marginBottom: '30px', color: '#5d4037' }}>
            The journey has uncovered your true nature
          </p>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          style={{
            backgroundColor: '#fff',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            marginBottom: '30px'
          }}
        >
          <h3 style={{ color: '#4a6741', marginTop: '0' }}>Primary Spirit: {primaryAnimal}</h3>
          <p>{primaryProfile.overview}</p>
          
          <div className="traits-container">
            <h4>Key Traits:</h4>
            <ul>
              {primaryProfile.keyTraits.map((trait, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {trait}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="details-container">
            <h4>Strengths:</h4>
            <p>{primaryProfile.strengths}</p>
            
            <h4>Challenges:</h4>
            <p>{primaryProfile.challenges}</p>
            
            <h4>Relationships:</h4>
            <p>{primaryProfile.relationships}</p>
            
            <h4>At Work:</h4>
            <p>{primaryProfile.atWork}</p>
            
            <h4>Growth Path:</h4>
            <p>{primaryProfile.growthPath}</p>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          style={{
            backgroundColor: '#fff',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            marginBottom: '30px'
          }}
        >
          <h3 style={{ color: '#4a6741', marginTop: '0' }}>Secondary Spirit: {secondaryAnimal}</h3>
          <p>You also share qualities with the {secondaryAnimal}, which adds depth to your personality:</p>
          <p>{secondaryProfile.overview}</p>
        </motion.div>
        
        <motion.div 
          className="answers-container" 
          variants={itemVariants}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '15px',
            justifyContent: 'center'
          }}
        >
          <motion.button 
            className="answer-option"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{
              backgroundColor: '#4a6741',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              width: '180px'
            }}
          >
            Share My Results
          </motion.button>
          <motion.button 
            className="answer-option"
            onClick={onRestart}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{
              backgroundColor: '#8b5e3c',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              width: '180px'
            }}
          >
            Take the Quiz Again
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
