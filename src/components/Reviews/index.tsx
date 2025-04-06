// import React, { useEffect, useState } from "react";

// const API_KEY = "ТВОЙ_GOOGLE_PLACES_API_KEY";
// const PLACE_ID = "ID_ТВОЕГО_БИЗНЕСА";

// const Reviews: React.FC = () => {
//   const [reviews, setReviews] = useState<any[]>([]);

//   useEffect(() => {
//     fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`)
//       .then((res) => res.json())
//       .then((data) => setReviews(data.result.reviews || []))
//       .catch((err) => console.error("Ошибка загрузки отзывов:", err));
//   }, []);

//   return (
//     <div>
//       <h2>Отзывы с Google</h2>
//       <ul>
//         {reviews.map((review, index) => (
//           <li key={index}>
//             <strong>{review.author_name}</strong>: {review.text} ⭐ {review.rating}/5
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Reviews;


// import React, { useState, useEffect } from 'react';

// const TrustpilotReviews: React.FC = () => {
//   const [reviews, setReviews] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       const response = await fetch('https://api.trustpilot.com/v1/business-units/{business-unit-id}/reviews', {
//         headers: {
//           'Authorization': `Bearer YOUR_API_KEY`,
//         },
//       });
//       const data = await response.json();
//       setReviews(data.reviews);
//       setLoading(false);
//     };

//     fetchReviews();
//   }, []);

//   if (loading) return <div>Loading reviews...</div>;

//   return (
//     <div>
//       <h2>Отзывы с Trustpilot</h2>
//       <ul>
//         {reviews.map((review, index) => (
//           <li key={index}>
//             <strong>{review.reviewer.name}</strong>: {review.text} ⭐ {review.rating}/5
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TrustpilotReviews;
