// components/ReviewCards.tsx
import React from 'react';
import Image from 'next/image';
import { FaStar, FaRegStar, FaUserCircle } from 'react-icons/fa';

// Define type for individual review
type Review = {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  profilePic?: string;
};

// StarRating Props
interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) =>
        i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
      )}
    </div>
  );
};

const ReviewCards: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      rating: 5,
      date: 'May 15, 2023',
      comment:
        'This product is amazing! The quality exceeded my expectations and it arrived quickly.',
      },
    {
      id: 2,
      name: 'Sarah Miller',
      rating: 4,
      date: 'April 28, 2023',
      comment:
        'Very good product overall. The color is slightly different than shown but still nice.',
    },
    {
      id: 3,
      name: 'Michael Chen',
      rating: 5,
      date: 'June 10, 2023',
      comment:
        'Perfect! Exactly what I was looking for. Will definitely buy again.',
     },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Customer Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <div className="flex items-center mb-4">
              {/* Profile picture or fallback icon */}
              <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                {review.profilePic ? (
                  <Image
                    src={review.profilePic}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="object-cover h-full w-full"
                  />
                ) : (
                  <FaUserCircle className="text-gray-400 text-3xl" />
                )}
              </div>

              <div className="ml-3">
                <h3 className="font-medium">{review.name}</h3>
                <div className="flex items-center">
                  <StarRating rating={review.rating} />
                  <span className="text-sm text-gray-500 ml-2">
                    {review.rating}.0
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{review.comment}</p>
            <p className="text-sm text-gray-400">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCards;
