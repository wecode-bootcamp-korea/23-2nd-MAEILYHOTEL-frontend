import React from 'react';

import styled from 'styled-components';
import { flexSet } from '../../../styles/Mixins';

export const BookInfo = ({ name, email }) => {
  return (
    <StyledBookInfo>
      <UserInfoTitle>예약자 정보</UserInfoTitle>
      <UserInfo>
        <span>예약자명</span>
        <span>{name}</span>
      </UserInfo>
      <UserInfo>
        <span>연락처</span>
        <span>010-****-**** (하드코딩입니다)</span>
      </UserInfo>
      <UserInfo>
        <span>이메일</span>
        <span>{email}</span>
      </UserInfo>
    </StyledBookInfo>
  );
};

const UserInfoTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 35px;
`;

export const UserInfo = styled.div`
  ${flexSet('space-between', 'center', 'row')}
  width: 100%;
  margin-bottom: 35px;
  font-size: 25px;

  span:last-child {
    color: gray;
  }
`;

export const StyledBookInfo = styled.div`
  ${flexSet('center', 'flex-start', 'column')}
  width: 100%;
  margin-top: 25px;
  padding: 0 80px;
  border-bottom: 1px solid lightgray;
`;
