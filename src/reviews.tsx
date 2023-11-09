import React from "react";
import styled from "styled-components";
//
// type Review = {
//   comment: string;
//   name: string;
// };
//
// type ReviewsProps = {
//   reviews: Review[];
// };
//
// const ReviewsContainer = styled.div`
//   font-family: 'Arial', sans-serif;
//   max-width: 210mm; // Width of A4 sheet
//   padding: 10mm; // Padding inside the A4 sheet boundaries
//   box-sizing: border-box;
// `;
//
// const ReviewBlock = styled.div`
//   margin-bottom: 5mm; // Space between reviews
//   &:last-child {
//     margin-bottom: 0;
//   }
// `;
//
// const Comment = styled.p`
//   font-size: 10pt; // Smaller text for comments
//   line-height: 1.6; // For readability
//   margin: 0 0 2mm 0; // Space above name
// `;
//
// const Name = styled.p`
//   font-size: 10pt;
//   font-weight: bold;
//   margin: 0; // Remove default paragraph margin
// `;
//
// const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
//   return (
//     <ReviewsContainer>
//       {reviews.map((review, index) => (
//         <ReviewBlock key={index}>
//           <Comment>{review.comment}</Comment>
//           <Name>- {review.name}</Name>
//         </ReviewBlock>
//       ))}
//     </ReviewsContainer>
//   );
// };
//
// export default Reviews;
//

type Review = {
  comment: string;
  name: string;
};

type ReviewsProps = {
  reviews: Review[];
};

const ReviewsContainer = styled.section`
  font-family: 'Helvetica Neue', Arial, sans-serif;
  max-width: 210mm;
  padding: 15mm;
  box-sizing: border-box;
  border-radius: 5mm;
`;

const ReviewBlock = styled.article`
  background-color: white;
  border-left: 4px solid #007bff;
  padding: 6mm;
  margin-bottom: 5mm;
  border-radius: 2mm;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Comment = styled.p`
  font-size: 11pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 4mm 0;
  text-align: justify;
`;

const Name = styled.footer`
  font-size: 10pt;
  font-weight: bold;
  text-align: right;
  margin: 0;
  color: #007bff;
`;

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <ReviewsContainer>
      {reviews.map((review, index) => (
        <ReviewBlock key={index}>
          <Comment>"{review.comment}"</Comment>
          <Name>— {review.name}</Name>
        </ReviewBlock>
      ))}
    </ReviewsContainer>
  );
};

export default Reviews;
