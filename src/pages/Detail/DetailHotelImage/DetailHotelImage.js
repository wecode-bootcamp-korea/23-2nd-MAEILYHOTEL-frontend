import React from 'react';
import styled from 'styled-components';

export const DetailHotelImage = () => {
  return <HotelImg src="./images/hotel_1.jpg" alt="hotel" />;
};

const HotelImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
