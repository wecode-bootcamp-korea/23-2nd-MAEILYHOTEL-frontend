import React, { useState, useEffect } from 'react';
import { ReservationList } from './ReservationList';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks';

import styled from 'styled-components';
import { flexSet } from '../../styles/Mixins';
import { BOOK_API, LOGIN_TOKEN } from '../../config';

export const Reservation = () => {
  const token = localStorage.getItem(LOGIN_TOKEN);
  const headers = { Authorization: token };
  const [hotels, loading] = useFetch(`${BOOK_API}`, { headers });

  console.log(hotels);
  // useEffect(() => {
  //   fetch()
  //     .then(res => res.json())
  //     .then(data => {
  //       sethotels(data);
  //     });
  // }, []);

  return (
    !loading && (
      <Body>
        <Graybox>
          <i class="fas fa-search" />
        </Graybox>
        <Filter>
          <Content>예약 리스트</Content>
        </Filter>
        {hotels.data.map(({ ...rest }, idx) => {
          return <ReservationList key={idx} {...rest} />;
        })}
      </Body>
    )
  );
};

const Body = styled.div`
  width: 1180px;
  margin: 0 auto;
`;

const Graybox = styled.div`
  background-color: #f8f8f9;
  width: 1150px;
  height: 40px;
  margin: 0px 12px;
  position: relative;
  i {
    position: absolute;
    top: 13px;
    left: 10px;
  }
`;

const Filter = styled.div`
  border-bottom: 1px solid #f1f1f1;
  ${flexSet('center', 'center', 'row')}
  height: 50px;
  margin-top: 20px;
`;

const Content = styled.div`
  font-size: 20px;
  color: black;
  /* padding: 11px 12px; */
  background-color: white;
  border: none;
`;
