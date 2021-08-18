import React from 'react';
import { DownloadCoupon } from './DownloadCoupon';

import styled from 'styled-components';
import { fontSet } from '../../../styles/Mixins';

export const DetailHotelTitle = ({ category, name }) => {
  return (
    <TitleWrap>
      <Grade>{category}</Grade>
      <HotelTitle>{name}</HotelTitle>
      <DownloadCoupon />
    </TitleWrap>
  );
};

const TitleWrap = styled.section`
  padding: 10px;
  border-bottom: 1px solid #e7e7e7;
`;

const Grade = styled.span`
  ${fontSet('12px', '#888', 'inherit', '1.33')};
  display: block;
  margin-top: 20px;
`;

const HotelTitle = styled.h1`
  ${fontSet('24px', '#4d4d4d', '700', '1.33')};
`;
