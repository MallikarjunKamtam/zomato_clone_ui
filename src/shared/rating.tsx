import React from "react";
import Star from "./star";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div>
      {Array.from({ length: fullStars }, (_, index) => (
        <Star key={`full-${index}`} type="full" />
      ))}
      {hasHalfStar && <Star type="half" />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <Star key={`empty-${index}`} type="empty" />
      ))}
    </div>
  );
};

export default Rating;
