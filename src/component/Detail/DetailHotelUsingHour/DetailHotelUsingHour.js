import React from 'react';
import { TimeInfo } from './TimeInfo';

import styled from 'styled-components';
import { boxSizeSet, fontSet } from '../../../styles/Mixins';

export const DetailHotelUsingHour = ({ check_in, check_out }) => {
  return (
    <UsingHourWrap>
      <HourTitle>대표 체크인/체크아웃 시간</HourTitle>
      <TimeInfo check_in={check_in} check_out={check_out} />
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

const CautionMessage = styled.li`
  ${({ color }) => fontSet('14px', color)};
  margin-top: 20px;
`;
