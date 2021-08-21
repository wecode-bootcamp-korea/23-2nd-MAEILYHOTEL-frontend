import React from 'react';
import { FacilitiesIconWrap } from './FacilitiesIconWrap';

import styled from 'styled-components';
import { fontSet } from '../../../styles/Mixins';

export const DetailHotelFacility = ({ total_rooms, facilities }) => {
  return (
    <FacilityWrap>
      <FacilityTitle>업장 내 편의시설</FacilityTitle>
      <RoomCountWrap>
        <span>객실 수: </span>
        <span>{total_rooms}</span>
        <span>개</span>
      </RoomCountWrap>
      <FacilityIconWrap>
        {facilities?.map((data, idx) => {
          return <FacilitiesIconWrap key={idx} text={data} />;
        })}
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
