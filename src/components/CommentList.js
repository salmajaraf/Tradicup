// CommentList.js
import React, { useState } from 'react';
import '../assets/css/commentList.css';

const CommentList = ({ comments }) => {
  const [sortByNewest, setSortByNewest] = useState(false);

  const sortedComments = sortByNewest
    ? [...comments].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    : comments;

  return (
    <div className="comment-list-container">
      <button onClick={() => setSortByNewest(!sortByNewest)}>
        {sortByNewest ? 'Sort by Oldest' : 'Sort by Newest'}
      </button>
      {sortedComments.map((comment, index) => (
        <div key={index} className="comment-list-item">
          <div className="comment-details">
            <strong>{comment.name}</strong>
            <small>{new Date(comment.timestamp).toLocaleString()}</small>
          </div>
          <div className="comment-text">{comment.text}</div>
        </div> 
      ))}
    </div>
  );
};

export default CommentList;
