import React from 'react';

import { useHistory } from 'react-router';
import { BookInfo } from './BookInfo';
import { PointWrap } from './PointWrap';

import { useProfile } from '../../../hooks';
import { BOOK_API, LOGIN_TOKEN } from '../../../config';
import { postFetch, queryGenerator } from '../../../utils';

import styled from 'styled-components';
import { flexSet, fullScreen } from '../../../styles/Mixins';

const bookOrNot = (
  id = 0,
  type = '',
  date = [],
  total = 0,
  discount = 0,
  headers = {}
) => {
  const postResult = postFetch(BOOK_API, headers, {
    Room: id,
    RoomOption: type,
    CheckIn: date[0],
    CheckOut: date[1],
    Price: total - total * discount,
  });

  return postResult;
};

export const CreditWrapper = ({ roomData }) => {
  const history = useHistory();
  const { id, query, type, check_in, check_out, total } = roomData;

  const [profile, profileLoading, profileError] = useProfile();
  const { name, email, point, discount } = profile;

  const headers = { Authorization: localStorage.getItem(LOGIN_TOKEN) };

  const date = queryGenerator(query);

  return (
    !profileLoading && (
      <StyledCreditWrapper>
        <CreditHotelName>
          <h1>호텔 엔트라 강남</h1>
          <span>디럭스</span>
        </CreditHotelName>
        <CreditStayDate>
          <CreditCheckInOut>
            <span>체크인</span>
            <span>{check_in}</span>
          </CreditCheckInOut>
          <CreditCheckInOut>
            <span>체크아웃</span>
            <span>{check_out}</span>
          </CreditCheckInOut>
        </CreditStayDate>
        <BookInfo name={name} email={email} />
        <PointWrap point={point} total={total} discount={discount} />
        <BookButton
          onClick={() => {
            const creditOk = bookOrNot(
              id,
              type,
              date,
              total,
              discount,
              headers
            );
            if (creditOk) {
              history.push('/');
            }
          }}
        >
          예약
        </BookButton>
      </StyledCreditWrapper>
    )
  );
};

const BookButton = styled.button`
  width: 1000px;
  margin-top: 20px;
  padding: 15px 0;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.blue};
  font-size: 45px;
  letter-spacing: 1rem;
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

const StyledCreditWrapper = styled.div`
  ${flexSet('center', 'center', 'column')}
  max-width: 1180px;
`;
