import React from 'react';

import styled from 'styled-components';
import { boxSizeSet, flexSet, fontSet } from '../../../styles/Mixins';

export const DetailHotelInfo = ({ name, description }) => {
  return (
    <HotelInfoWrap>
      <InfoTitleWrap>
        <InfoLogo src="./images/comment_logo.png" alt="logo" />
        <InfoTitle>매일리's comment</InfoTitle>
      </InfoTitleWrap>
      <InfoText>
        <InfoListNum>01</InfoListNum>
        역대 최저가의 가격인 {name} 입니다.
      </InfoText>
      <InfoText>
        <InfoListNum>02</InfoListNum>
        {description}
      </InfoText>
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

const InfoText = styled.div`
  ${fontSet('15px', '#4d4d4d', '600', '1.5')};
  margin-left: 35px;
`;

const InfoListNum = styled.span`
  ${fontSet('20px', '#c5c5c5', 'inherit', '1.5')};
  margin: 0 20px;
`;
