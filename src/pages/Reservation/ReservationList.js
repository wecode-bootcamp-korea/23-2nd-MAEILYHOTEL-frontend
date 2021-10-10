import React from 'react';

import styled from 'styled-components';
import { flexSet } from '../../styles/Mixins';
import { theme } from '../../styles/theme';

export const ReservationList = ({ stay_name, stay_img, status, room_name }) => {
  return (
    <Hotel>
      <HotelImg>
        <img alt="rose" src={stay_img} />
      </HotelImg>
      <Info>
        <Name>{stay_name}</Name>
        <Status>
          <span>{status}</span>
          <span>{room_name}</span>
          {/* <span>27500원</span> */}
        </Status>
      </Info>
    </Hotel>
  );
};

const Hotel = styled.ul`
  display: flex;
  background-color: white;
  border-top: 18px solid #f8f8f9;
`;

const HotelImg = styled.div`
  width: 750px;
  position: relative;

  img {
    width: 100%;
    height: 177px;
    object-fit: cover;
  }

  i {
    position: absolute;
    right: 15px;
    color: white;
    top: 10px;
    font-size: 20px;
  }
`;

const Info = styled.div`
  ${flexSet('space-between', 'inherit', 'column')}
  padding: 40px 0 30px 25px;
`;

const Name = styled.div`
  font-size: 30px;
  margin-bottom: 6px;
`;

const Status = styled.div`
  span:first-child {
    font-size: 18px;
    color: red;
    margin-right: 15px;
  }
  span:last-child {
    color: black;
    font-size: 18px;
    margin-right: 15px;
  }
`;
