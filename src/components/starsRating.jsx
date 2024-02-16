import React from 'react';

const StarRating = ({ rating, totalRatings }) => {
  
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`h-5 w-5 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}>
        ★
      </span>
    );
  }

  return (
    <div className="flex">
      {stars}
      <span className="text-sm text-gray-600 ml-2">({totalRatings} avis)</span>
    </div>
  );
};

export default StarRating;