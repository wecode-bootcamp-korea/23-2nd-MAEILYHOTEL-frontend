import React from 'react';
import { idMasking } from './reviewIdMasking';

import styled from 'styled-components';
import { fontSet } from '../../../styles/Mixins';

export const ReviewForm = ({ userId, score, description, userImage }) => {
  const userIdData = idMasking(String(userId));

  return (
    <ReviewFormWrap>
      <ReviewBox>
        <UserReviewScore>{score}</UserReviewScore>
        <ReviewArticle>{description}</ReviewArticle>
        <UserId>{userIdData}</UserId>
      </ReviewBox>
      <div>
        {userImage?.map((img, idx) => {
          return <UserUploadImg key={idx} src={img} alt="" />;
        })}
      </div>
    </ReviewFormWrap>
  );
};

const ReviewFormWrap = styled.section`
  border-bottom: 1px solid #e7e7e7;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const ReviewBox = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const UserReviewScore = styled.span`
  display: block;
  color: #13aab8;
  font-size: 16px;
  line-height: 1.23;
  font-weight: 700;
  margin-right: 6px;
`;

const ReviewArticle = styled.div`
  margin: 5px 0;
  font-size: 16px;
  line-height: 1.23;
`;

const UserId = styled.span`
  ${fontSet('10px', 'gray', '300', '1')};
`;

const UserUploadImg = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 20px;
`;
