import React, { useState } from 'react';
import { useFetch } from '../../../hooks';
import { RoomType } from './RoomType';
// import { DETAIL_PAGE } from '../../../config';                         // 실제 사용 코드

import styled from 'styled-components';
import { fontSet, boxSizeSet, border, flexSet } from '../../../styles/Mixins';

export const DetailHotelRoom = ({ setCalendarOn }) => {
  const [roomListData, loading] = useFetch('/data/ROOM_DATA.json');
  // const [roomListData, loading] = useFetch(
  //   `${DETAIL_PAGE}/3/rooms?CheckIn=2021-08-01&CheckOut=2021-08-03`  // 실제 사용 코드
  // );
  const [isFilterHandle, setIsFilterHandle] = useState(true);

  const avgButton = () => {
    setIsFilterHandle(false);
  };

  const totalButton = () => {
    setIsFilterHandle(true);
  };

  return (
    !loading && (
      <RoomChoiceWrap>
        <RoomChoiceTitle>객실선택</RoomChoiceTitle>
        <ChoiceDate>날짜</ChoiceDate>
        <CostFilter>
          <TotalCostFilter onClick={avgButton} isFilterHandle={isFilterHandle}>
            총 가격
          </TotalCostFilter>
          <AvgCostFilter onClick={totalButton} isFilterHandle={isFilterHandle}>
            1박 평균 가격
          </AvgCostFilter>
        </CostFilter>
        {roomListData?.data?.map((list, idx) => {
          return (
            <RoomType key={idx} list={list} isFilterHandle={isFilterHandle} />
          );
        })}
        <RoomReservation color="#74B9ff" onClick={setCalendarOn}>
          날짜 선택하고 객실 더보기
        </RoomReservation>
      </RoomChoiceWrap>
    )
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

const ChoiceDate = styled.div`
  ${flexSet('inherit', 'center')};
  ${boxSizeSet('100%', '40px', '30px 0 10px', '0 16px')};
  position: relative;
  border-radius: 2px;
  background-color: rgb(252, 247, 248);
`;

const CostFilter = styled.div`
  ${boxSizeSet('100%', '50px', 'none', 'none')};
  border-top: 1px solid #e7e7e7;
  background-color: #f8f8f9;
`;

const TotalCostFilter = styled.li`
  float: right;
  position: relative;
  margin-right: 24px;
  padding-top: 23px;
  font-size: 13px;
  color: ${props => (props.isFilterHandle === false ? '#4d4d4d' : '#c5c5c5')};
  cursor: pointer;
`;

const AvgCostFilter = styled.li`
  float: right;
  position: relative;
  margin-right: 24px;
  padding-top: 23px;
  font-size: 13px;
  color: ${props => (props.isFilterHandle === true ? '#4d4d4d' : '#c5c5c5')};
  cursor: pointer;
`;

const RoomReservation = styled.button`
  ${({ color }) => fontSet('inherit', color, 'inherit', '0')};
  ${boxSizeSet('100%', '44px', '30px 0 0 0')};
  ${({ color }) => border(`1px solid ${color}`, '2px')};
  text-align: center;
  background-color: white;
  cursor: pointer;
`;
