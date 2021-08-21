import React from 'react';

import styled from 'styled-components';
import { boxSizeSet, flexSet, fontSet } from '../../../styles/Mixins';

export const RoomType = ({ list }) => {
  const price = Math.ceil(
    Number(`${list.option[0].price.total}`)
  ).toLocaleString();

  return (
    <RoomTypeWrap>
      <RoomImg src={list.image_url} alt="room" />
      <RoomInfo>
        <div>
          <RoomTitle>{list.name}</RoomTitle>
          <LimitPersonnel>
            {list.people}인 기준 / 최대 {list.people}인
          </LimitPersonnel>
        </div>
        <div>
          <GrayFont>{list.option[0].type}</GrayFont>
          <Cost>{price}</Cost>
          <GrayFont>원</GrayFont>
        </div>
      </RoomInfo>
    </RoomTypeWrap>
  );
};

const RoomTypeWrap = styled.section`
  ${flexSet('inherit', 'inherit', 'row')};
  border-bottom: 10px solid #f8f8f9;
  cursor: pointer;
`;

const RoomImg = styled.img`
  ${boxSizeSet('150px', '200px')};
  object-fit: cover;
`;

const RoomInfo = styled.div`
  ${flexSet('space-between', 'inherit', 'column')};
  padding: 15px;
`;

const RoomTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

const LimitPersonnel = styled.span`
  ${fontSet('13px', '#888', 'inherit', '1.08')};
`;

const GrayFont = styled.span`
  ${fontSet('13px', '#888')};
  margin-right: 10px;
`;

const Cost = styled.span`
  ${fontSet('18px', 'inherit', '700', '1')};
  margin-right: 5px;
`;
