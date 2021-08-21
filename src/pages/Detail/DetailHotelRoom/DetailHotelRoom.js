import React from 'react';
import { useFetch } from '../../../hooks';
import { RoomType } from './RoomType';

import styled from 'styled-components';
import { fontSet, boxSizeSet, border, flexSet } from '../../../styles/Mixins';

export const DetailHotelRoom = () => {
  // const [roomCategori, setRoomCategori] = useState([]);

  // useEffect(() => {
  // fetch(`${API_IP}/${params.id}`);       // 벨로그 작성 후 삭제예정
  //   fetch()
  //     .then(res => res.json())
  //     .then(res => {
  //       setRoomCategori(res);
  //     });
  // }, []);

  const [roomListData, loading] = useFetch('/data/ROOM_DATA.json');

  return (
    !loading && (
      <RoomChoiceWrap>
        <RoomChoiceTitle>객실선택</RoomChoiceTitle>
        <ChoiceDate>날짜</ChoiceDate>
        <CostFilter>
          <AvgCostFilter>1박 평균 가격</AvgCostFilter>
          <TotalCostFilter>총 가격</TotalCostFilter>
        </CostFilter>
        {roomListData?.data?.map((list, idx) => {
          return <RoomType key={idx} list={list} />;
        })}
        <RoomReservation color="#74B9ff">
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
  width: 100%;
  height: 50px;
  background-color: #f8f8f9;
  border-top: 1px solid #e7e7e7;
`;

const AvgCostFilter = styled.li``;

const TotalCostFilter = styled.li``;

const RoomReservation = styled.button`
  ${({ color }) => fontSet('inherit', color, 'inherit', '0')};
  ${boxSizeSet('100%', '44px', '30px 0 0 0')};
  ${({ color }) => border(`1px solid ${color}`, '2px')};
  text-align: center;
  background-color: white;
  cursor: pointer;
`;
