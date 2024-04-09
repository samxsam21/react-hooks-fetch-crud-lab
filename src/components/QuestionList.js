import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);
  return (
    <div>
      {questions.map(question => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </div>
  );
}

export default QuestionList;
