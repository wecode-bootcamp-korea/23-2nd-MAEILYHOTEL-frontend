import React, { useState } from 'react';
import { ReservationList } from './ReservationList';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { flexSet } from '../../styles/Mixins';

export const Reservation = () => {
  const [hotels, sethotels] = useState([]);
  const history = useHistory();

  return (
    <Body>
      <Graybox>
        <i class="fas fa-search" />
      </Graybox>
      <Filter>
        <Content>예약 리스트</Content>
      </Filter>
      {hotels.map(({ id, name, image, price, key }) => {
        return (
          <ReservationList
            key={id}
            name={name}
            image={image}
            price={price}
            id={id}
          />
        );
      })}
    </Body>
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
