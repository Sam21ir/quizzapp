import React, { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { data } from '../data/questions';

const Quiz = () => {
  const navigate = useNavigate(); // Add this hook
  
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let option_array = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
      }
    }
  }

  const next = () => {
    if (lock === true) {
      // Check if this is the last question
      if (index === data.length - 1) {
        // Navigate to result page with the score
        navigate('/result', { 
          state: { 
            score: score + (question.ans === getSelectedAnswer() ? 1 : 0),
            totalQuestions: data.length 
          } 
        });
      } else {
        // Move to next question
        setIndex(index + 1);
        setQuestion(data[index + 1]);
        setLock(false);
        option_array.forEach((option) => {
          option.current.classList.remove("correct");
          option.current.classList.remove("wrong");
        });
      }
    }
  }

  // Helper function to get selected answer (optional, for accuracy)
  const getSelectedAnswer = () => {
    for (let i = 0; i < option_array.length; i++) {
      if (option_array[i].current.classList.contains("correct") || 
          option_array[i].current.classList.contains("wrong")) {
        return i + 1;
      }
    }
    return null;
  }

  // const reset = () => {
  //   setIndex(0);
  //   setQuestion(data[0]);
  //   setLock(false);
  //   setScore(0);
  //   option_array.forEach((option) => {
  //     option.current.classList.remove("correct");
  //     option.current.classList.remove("wrong");
  //   });
  // }

  return (
    <div>
      <div className='cardquestions'>
        <h1>Quiz Page</h1>
        <h2>{index + 1}. {question.question}</h2>
        <ul>
          <li ref={option1} onClick={(e) => { checkAns(e, 1); }}>{question.option1}</li>
          <li ref={option2} onClick={(e) => { checkAns(e, 2); }}>{question.option2}</li>
          <li ref={option3} onClick={(e) => { checkAns(e, 3); }}>{question.option3}</li>
          <li ref={option4} onClick={(e) => { checkAns(e, 4); }}>{question.option4}</li>
        </ul>
        <button onClick={next}>
          {index === data.length - 1 ? 'Finish' : 'Next'}
        </button>
        <div className='index'>
          {index + 1} of {data.length} questions
        </div>
      </div>
    </div>
  );
};

export default Quiz;