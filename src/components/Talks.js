import '../assets/css/talks.css';
import React, { useState, useEffect } from 'react';
import CommentForm from './commentForm';
import CommentList from './CommentList';


const Talks = () => {
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

    

    return (
        <div className="Talks" id="home">
            <div className="headTalks">
                <h1 className="title">Discover Morocco: World Cup 2030</h1>
                <p>"Engage, Reflect, and share your Moroccan World Cup Experience in our 'Talks ans Share' Hub-Where Opinions Unite".</p>

            </div> 
            <div className='bottomtalks'>
                <CommentForm onAddComment={handleAddComment} />
                <CommentList comments={comments} />
            </div>
        </div>



  );
};
export default Talks;