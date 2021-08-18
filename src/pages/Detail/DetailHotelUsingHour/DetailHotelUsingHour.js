import React from 'react';
import styled from 'styled-components';
import { boxSizeSet, flexSet, fontSet } from '../../../styles/Mixins';

export const DetailHotelUsingHour = () => {
  return (
    <UsingHourWrap>
      <HourTitle>대표 체크인/체크아웃 시간</HourTitle>
      <TimeInfo>
        <CheckInHour>
          <InfoTitle color="#767676">체크인</InfoTitle>
          <InfoTime>15:00</InfoTime>
        </CheckInHour>
        <CheckOutHour>
          <InfoTitle color="#767676">체크아웃</InfoTitle>
          <InfoTime>11:00</InfoTime>
        </CheckOutHour>
      </TimeInfo>
      <CautionMessage color="#767676">
        체크인/아웃 시간은 객실별, 요일별로 상이하오니 결제 단계에서 선택하신
        객실의 체크인/아웃 시간을 꼭 확인 부탁드립니다.
      </CautionMessage>
    </UsingHourWrap>
  );
};

const UsingHourWrap = styled.div`
  ${boxSizeSet('100%', 'none', '30px 0 0 0', '20px 30px')};
`;

const HourTitle = styled.div`
  ${fontSet('25px', '#4d4d4d', '700', '1.33')};
  margin-bottom: 14px;
`;

const TimeInfo = styled.div`
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

const CautionMessage = styled.li`
  ${({ color }) => fontSet('14px', color)};
  margin-top: 20px;
`;
