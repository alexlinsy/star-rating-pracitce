import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            size={100}
            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setRating(ratingValue)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
