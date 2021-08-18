import React from 'react';
import styled from 'styled-components';
import { fontSet, flexSet } from '../../../styles/Mixins';

export const DetailHotelFacility = () => {
  return (
    <FacilityWrap>
      <FacilityTitle>업장 내 편의시설</FacilityTitle>
      <RoomCountWrap>
        <span>객실 수: </span>
        <span>615</span>
        <span>개</span>
      </RoomCountWrap>
      <FacilityIconWrap>
        <FacilityIconBox>
          <img src="./images/parking_icon.png" alt="parking" />
          <span>주차가능</span>
        </FacilityIconBox>
        <FacilityIconBox>
          <img src="./images/restaurant_icon.png" alt="parking" />
          <span>조식당</span>
        </FacilityIconBox>
        <FacilityIconBox>
          <img src="./images/wifi_icon.png" alt="parking" />
          <span>무료 wifi</span>
        </FacilityIconBox>
      </FacilityIconWrap>
    </FacilityWrap>
  );
};

const FacilityWrap = styled.section`
  padding: 20px 30px;
`;

const FacilityTitle = styled.span`
  ${fontSet('25px', '#4d4d4d', '700', '1.33')};
  display: block;
  margin-bottom: 14px;
`;

const RoomCountWrap = styled.li`
  ${fontSet('15px', 'inherit', 'inherit', '1.64')};
  margin-left: 30px;
`;

const FacilityIconWrap = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  justify-items: center;
  padding: 10px 50px;
`;

const FacilityIconBox = styled.div`
  ${flexSet('inherit', 'inherit', 'column')};
  text-align: center;
  width: 70px;
  font-size: 14px;
`;
