import React from 'react';
const QuestionItem = ({ question, onUpdate }) => {
  const handleUpdate = (event) => {
    const { value } = event.target;
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correctIndex: value })
    })
    .then(() => onUpdate(question.id, value))
    .catch(error => console.error('Error updating question:', error));
  };
  return (
    <div>
      <p>{question.prompt}</p>
      {/* Display other question details */}
      <select value={question.correctIndex} onChange={handleUpdate}>
        {question.answers.map((answer, index) => (
          <option key={index} value={index}>{answer}</option>
        ))}
      </select>
    </div>
  );
}

export default QuestionItem;
