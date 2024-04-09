import React, { useState } from 'react';

const NewQuestionForm = ({ onQuestionAdd }) => {
  const [formData, setFormData] = useState({ prompt: '', answers: [], correctIndex: 0 });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newQuestion => {
      onQuestionAdd(newQuestion);
      setFormData({ prompt: '', answers: [], correctIndex: 0 });
    })
    .catch(error => console.error('Error adding question:', error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for prompt, answers, and correctIndex */}
      <button type="submit">Add Question</button>
    </form>
  );
}

export default NewQuestionForm;
