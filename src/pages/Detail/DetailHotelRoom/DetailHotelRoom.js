import React from 'react';
import styled from 'styled-components';
import { fontSet, boxSizeSet, border } from '../../../styles/Mixins';

export const DetailHotelRoom = ({ setCalendarOn }) => {
  return (
    <RoomChoiceWrap>
      <RoomChoiceTitle>객실선택</RoomChoiceTitle>
      <RoomImage src="./images/hotel_1.jpg" alt="hotel" />
      <RoomReservation color="#74B9ff" onClick={setCalendarOn}>
        날짜 선택하고 객실 더보기
      </RoomReservation>
      <ChoiceInfo>
        캘린더에서 날짜를 선택하시고 특가 객실을 확인하세요
      </ChoiceInfo>
    </RoomChoiceWrap>
  );
};

const RoomChoiceWrap = styled.div`
  padding: 20px 30px;
  border-top: 10px solid #f8f8f9;
  border-bottom: 1px solid #e7e7e7;
`;

const RoomChoiceTitle = styled.h2`
  ${fontSet('25px', 'inherit', '700')};
  padding-top: 10px;
`;

const RoomImage = styled.img`
  ${boxSizeSet('100%', 'auto', '30px 0 0 0')}
`;

const RoomReservation = styled.button`
  ${({ color }) => fontSet('inherit', color, 'inherit', '0')};
  ${boxSizeSet('100%', '44px', '30px 0 0 0')};
  ${({ color }) => border(`1px solid ${color}`, '2px')};
  text-align: center;
  background-color: white;
  cursor: pointer;
`;

const ChoiceInfo = styled.div`
  ${fontSet('12px', 'rgb(77, 77, 77)')};
  margin-top: 10px;
  text-align: center;
`;
