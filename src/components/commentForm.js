import React, { useState } from 'react';
import '../assets/css/commentForm.css';

const CommentForm = ({ onAddComment }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      name: name,
      text: comment,
      timestamp: new Date().toISOString(), // Include the timestamp
    };

    onAddComment(newComment);

    // Clear the form fields after submitting
    setName('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className='form25'>
      <h3>Share Here:</h3>
      <div className='input'>
        <div className='Name'>
          <label>
              <div className='label'>Add your Name:</div>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <br />
        <div className='Comment'>
          <label>
              <div className='label'>Add a Comment:</div>
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
          </label>
        </div>
        <br />
      </div>
      <div className='butonPost'>
        <button type="submit">Post</button>
      </div>
    </form>
  );
};

export default CommentForm;
