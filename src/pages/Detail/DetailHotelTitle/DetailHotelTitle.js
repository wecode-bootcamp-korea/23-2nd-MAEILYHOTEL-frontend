import React from 'react';
import styled from 'styled-components';
import { fontSet } from '../../../styles/Mixins';
import { DownloadCoupon } from './DownloadCoupon/DownloadCoupon';

export const DetailHotelTitle = ({ grade, title, cost }) => {
  return (
    <TitleWrap>
      <Grade>{grade}</Grade>
      <HotelTitle>{title}</HotelTitle>
      <CostWrap>
        <HotelCost>{cost}</HotelCost>
        <span>원 부터</span>
      </CostWrap>
      <DateStandard>(8월 24일 투숙 기준)</DateStandard>
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

const CostWrap = styled.div`
  margin-top: 20px;
`;

const HotelCost = styled.span`
  ${fontSet('20px', 'inherit', '700')};
  display: inline;
`;

const DateStandard = styled.span`
  ${fontSet('12px', '#4d4d4d', 'inherit', '1.33')};
  display: block;
  margin: 4px 0 16px;
`;
