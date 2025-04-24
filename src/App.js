import { useState } from 'react';
import './App.css';
import questions from './data/questions';
import animalProfiles from './data/animalProfiles';

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
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>What Animal Are You?</h1>
        <h2>A Personality Test</h2>
      </header>
      
      <main className="App-main">
        {!showResults ? (
          <QuizSection 
            question={questions[currentQuestionIndex]} 
            onAnswerSelected={handleAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        ) : (
          <ResultsSection 
            primaryAnimal={primaryAnimal}
            secondaryAnimal={secondaryAnimal}
            animalProfiles={animalProfiles}
            onRestart={restartQuiz}
          />
        )}
      </main>
      
      <footer className="App-footer">
        <p>© 2025 What Animal Are You? Personality Test</p>
      </footer>
    </div>
  );
}

function QuizSection({ question, onAnswerSelected, questionNumber, totalQuestions }) {
  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div className="progress-filled" style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}></div>
      </div>
      <p className="progress-text">Question {questionNumber} of {totalQuestions}</p>
      
      <div className="scene-container">
        <h3 className="scene-title">{question.title}</h3>
        <p className="scene-description">{question.sceneDescription}</p>
      </div>
      
      <div className="character-dialog">
        <div className="character-image">
          {/* Fox guide image would go here */}
        </div>
        <p className="dialog-text">{question.dialogText}</p>
      </div>
      
      <div className="answers-container">
        {question.answers.map((answer, index) => (
          <button 
            key={index} 
            className="answer-button"
            onClick={() => onAnswerSelected(answer.points)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultsSection({ primaryAnimal, secondaryAnimal, animalProfiles, onRestart }) {
  const primaryProfile = animalProfiles[primaryAnimal];
  const secondaryProfile = animalProfiles[secondaryAnimal];
  
  return (
    <div className="results-container">
      <h2 className="results-title">Your Animal Spirit Revealed!</h2>
      
      <div className="primary-result">
        <h3>Your Primary Spirit Animal: {primaryAnimal}</h3>
        <div className="animal-image">
          {/* Primary animal image would go here */}
        </div>
        <p className="animal-description">{primaryProfile.overview}</p>
        
        <div className="traits-container">
          <h4>Key Traits:</h4>
          <ul>
            {primaryProfile.keyTraits.map((trait, index) => (
              <li key={index}>{trait}</li>
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
      </div>
      
      <div className="secondary-result">
        <h3>Your Secondary Spirit Animal: {secondaryAnimal}</h3>
        <p>You also share traits with the {secondaryAnimal}, which adds depth to your personality:</p>
        <p>{secondaryProfile.overview}</p>
      </div>
      
      <div className="action-buttons">
        <button className="share-button">Share My Results</button>
        <button className="restart-button" onClick={onRestart}>Take the Quiz Again</button>
      </div>
    </div>
  );
}

export default App;
