import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the score from navigation state
  const score = location.state?.score || 0;
  const totalQuestions = location.state?.totalQuestions || 0;
  
  // Calculate percentage
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  
  // Determine pass/fail message
  const getMessage = () => {
    if (percentage >= 80) return "Excellent!";
    if (percentage >= 60) return "Good job!";
    if (percentage >= 40) return "Not bad!";
    return "Keep practicing!";
  };

  const handleRetake = () => {
    navigate('/quiz');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="resultstyle">
      <h1>Quiz Results</h1>
      <div className="score-container">
        <h2>{getMessage()}</h2>
        <div className="score-display">
          <p className="score-text">Your Score</p>
          <p className="score-number">{score} / {totalQuestions}</p>
          <p className="percentage">{percentage}%</p>
        </div>
        <div className="button-group">
          <button onClick={handleRetake} className="retake-btn">
            Retake Quiz
          </button>
          <button onClick={handleGoHome} className="home-btn">
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;