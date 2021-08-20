import React from 'react';

import styled from 'styled-components';
import { flexSet, fullScreen } from '../../styles/Mixins';

export const Credit = () => {
  return (
    <Section>
      <CreditWrapper>
        <CreditHotelName>
          <h1>호텔 엔트라 강남</h1>
          <span>디럭스</span>
        </CreditHotelName>
        <CreditStayDate>
          <CreditCheckInOut>
            <span>체크인</span>
            <span>Date</span>
          </CreditCheckInOut>
          <CreditCheckInOut>
            <span>체크아웃</span>
            <span>Date</span>
          </CreditCheckInOut>
        </CreditStayDate>
        <BookInfo>
          <UserInfoTitle>예약자 정보</UserInfoTitle>
          <UserInfo>
            <span>예약자명</span>
            <span>김동우</span>
          </UserInfo>
          <UserInfo>
            <span>연락처</span>
            <span>010-123</span>
          </UserInfo>
          <UserInfo>
            <span>이메일</span>
            <span>123123@3231</span>
          </UserInfo>
        </BookInfo>
      </CreditWrapper>
    </Section>
  );
};

const UserInfoTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 35px;
`;

const UserInfo = styled.div`
  ${flexSet('space-between', 'center', 'row')}
  width: 100%;
  margin-bottom: 35px;
  font-size: 25px;

  span:last-child {
    color: gray;
  }
`;

const BookInfo = styled.div`
  ${flexSet('center', 'flex-start', 'column')}
  width: 100%;
  margin-top: 25px;
  padding: 0 80px;
  border-bottom: 1px solid lightgray;
`;

const CreditCheckInOut = styled.div`
  ${flexSet('center', 'center', 'column')}
  width: 50%;
  /* height: 80px; */
  border-bottom: 1px solid lightgray;
  font-size: 35px;

  span:first-child {
    margin-top: 20px;
  }
  span:last-child {
    margin: 20px 0;
  }
`;

const CreditStayDate = styled.div`
  ${flexSet('center', 'center', 'row')}
  width: 100%;
`;

const CreditHotelName = styled.div`
  ${flexSet('center', 'center', 'column')}
  width: 1180px;
  font-size: 22px;
  padding: 40px 0;
  margin-top: 20px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;

  h1 {
    font-size: 35px;
    margin-bottom: 20px;
  }

  span {
    color: gray;
  }
`;

const CreditWrapper = styled.div`
  ${flexSet('center', 'center', 'column')}
  max-width: 1180px;
`;

const Section = styled.section`
  ${flexSet('center', 'center')}
  ${fullScreen}
`;
