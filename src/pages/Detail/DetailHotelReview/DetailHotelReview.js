import React from 'react';
import { ReviewForm } from './ReviewForm';

import styled from 'styled-components';
import { fontSet, boxSizeSet, border } from '../../../styles/Mixins';

export const DetailHotelReview = ({ reviewModalActive, reviews }) => {
  return reviews[0] === null ? (
    <Review>
      <MoreReviewBtn color="#74B9ff" onClick={reviewModalActive}>
        리뷰 더보기
      </MoreReviewBtn>
    </Review>
  ) : (
    <Review>
      <div>
        <TrueReviewTitle>트루리뷰</TrueReviewTitle>
        <TrueReviewIcon className="far fa-thumbs-up" />
        <ReviewRate>80%</ReviewRate>
      </div>
      <ReviewForm
        score={reviews[0].score}
        userId={reviews[0].userId}
        description={reviews[0].description}
        userImage={reviews[0].image}
      />
      <MoreReviewBtn color="#74B9ff" onClick={reviewModalActive}>
        리뷰 더보기
      </MoreReviewBtn>
    </Review>
  );
};

const Review = styled.section`
  border-top: 10px solid #f8f8f9;
  border-bottom: 1px solid #e7e7e7;
  padding: 30px;
`;

const TrueReviewTitle = styled.h2`
  ${fontSet('20px', 'black', '700', '1.33')};
  display: inline;
`;

const TrueReviewIcon = styled.i`
  margin-left: 5px;
`;

const ReviewRate = styled.span`
  ${fontSet('20px', 'black', '700', '1')};
  margin: 0 5px;
`;

const MoreReviewBtn = styled.button`
  ${({ color }) => fontSet('15px', color, 'inherit', '0')};
  ${boxSizeSet('100%', '20px', '25px 0 0 0')};
  ${border('1px solid #e7e7e7', '2px')};
  text-align: center;
  background-color: white;
  cursor: pointer;
`;
