import '../assets/css/talks.css';
import React, { useState, useEffect } from 'react';
import CommentForm from './commentForm';
import CommentList from './CommentList';

const TalksDelete = () => {
    const [comments, setComments] = useState([]);
  
    useEffect(() => {
      // Load comments from local storage on component mount
      const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
      setComments(storedComments);
    }, []); // Empty dependency array to run the effect only on mount
  
    const handleAddComment = (newComment) => {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
  
      // Save comments to local storage whenever they change
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    };
  
    const handleClearComments = () => {
      // Clear comments from local storage and state
      localStorage.removeItem('comments');
      setComments([]);
    };
  
    return (
      <div className="Talks" id="home">
        <div className="headTalks">
          <h1 className="title">TALKS & SHARE</h1>
          <p>"Engage, Reflect, and share your Moroccan World Cup Experience in our 'Talks ans Share'<br/> Hub-Where Opinions Unite".</p>
        </div>
        <div>
          <div className="Share here">
            <h3>Share Here: </h3>
          </div>
          <CommentForm onAddComment={handleAddComment} />
          <button onClick={handleClearComments}>Clear Comments</button>
          <CommentList comments={comments} />
        </div>
      </div>
    );
  };
  
  export default TalksDelete;
  