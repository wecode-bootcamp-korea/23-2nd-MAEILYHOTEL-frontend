import React from 'react';
import styled from 'styled-components';
import INFO_LIST from './INFO_LIST';
import { InfoList } from './InfoList';
import { boxSizeSet, flexSet, fontSet } from '../../../styles/Mixins';

export const DetailHotelInfo = () => {
  return (
    <HotelInfoWrap>
      <InfoTitleWrap>
        <InfoLogo src="./images/comment_logo.png" alt="logo" />
        <InfoTitle>매일리's comment</InfoTitle>
      </InfoTitleWrap>
      {INFO_LIST.map((list, idx) => {
        return <InfoList key={idx} num={list.num} text={list.text} />;
      })}
    </HotelInfoWrap>
  );
};

const HotelInfoWrap = styled.div`
  ${boxSizeSet('100%', 'none', 'inherit', '26px 20px 30px')};
  background-color: #f8f8f9;
`;

const InfoTitleWrap = styled.div`
  ${flexSet('center', 'center', 'column')};
`;

const InfoLogo = styled.img`
  width: 50px;
`;

const InfoTitle = styled.span`
  ${fontSet('25px', '#4d4d4d', '700', '1.33')};
  margin: 10px 0 16px;
`;
