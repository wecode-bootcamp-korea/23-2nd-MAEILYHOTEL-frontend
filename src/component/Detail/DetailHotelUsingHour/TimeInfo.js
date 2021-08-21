import React from 'react';

import styled from 'styled-components';
import { boxSizeSet, flexSet, fontSet } from '../../../styles/Mixins';

export const TimeInfo = ({ check_in, check_out }) => {
  const checkIn = String(`${check_in}`).substr(0, 5);
  const checkOut = String(`${check_out}`).substr(0, 5);

  return (
    <TimeInfoWarp>
      <CheckInHour>
        <InfoTitle color="#767676">체크인</InfoTitle>
        <InfoTime>{checkIn}</InfoTime>
      </CheckInHour>
      <CheckOutHour>
        <InfoTitle color="#767676">체크아웃</InfoTitle>
        <InfoTime>{checkOut}</InfoTime>
      </CheckOutHour>
    </TimeInfoWarp>
  );
};

const TimeInfoWarp = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, auto));
`;

const CheckInHour = styled.div`
  ${flexSet('center', 'center', 'column')};
  ${boxSizeSet('100%', 'none', '0')};
  border-right: 1px solid #e7e7e7;
`;

const CheckOutHour = styled.div`
  ${flexSet('center', 'center', 'column')};
  ${boxSizeSet('100%', 'none', '0')};
`;

const InfoTitle = styled.span`
  ${({ color }) => fontSet('18px', color, 'inherit', '1.14')};
  margin-bottom: 4px;
`;

const InfoTime = styled.span`
  ${fontSet('19px', 'inherit', '500', '1.25')};
`;
