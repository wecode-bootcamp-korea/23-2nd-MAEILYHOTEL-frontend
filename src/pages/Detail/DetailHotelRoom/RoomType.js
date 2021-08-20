import React from 'react';

import styled from 'styled-components';
import { boxSizeSet, flexSet, fontSet } from '../../../styles/Mixins';
import { Reservation } from './Reservation';

export const RoomType = ({ list, isFilterHandle, parameters }) => {
  const { id, option, image_url, name, people } = list || {};
  const { price, type, check_in, check_out } = option[0] || {};
  const { total, avg } = price || {};

  const totalPrice = Math.ceil(Number(`${total}`)).toLocaleString();
  const avgPrice = Math.ceil(Number(`${avg}`)).toLocaleString();

  const { query } = parameters;

  const roomData = { id, query, type, check_in, check_out, total };

  return (
    <>
      <RoomTypeWrap>
        <RoomImg src={image_url} alt="room" />
        <RoomInfo>
          <div>
            <RoomTitle>{name}</RoomTitle>
          </div>
          <div>
            <LimitPersonnel>
              {people}인 기준 / 최대 {people}인
            </LimitPersonnel>
            <Cost>{`₩ ${isFilterHandle ? avgPrice : totalPrice}`}</Cost>
          </div>
        </RoomInfo>
        <Reservation roomData={roomData} />
      </RoomTypeWrap>
    </>
  );
};

const RoomTypeWrap = styled.section`
  ${flexSet('flex-start', 'center', 'row')};
  border-bottom: 10px solid #f8f8f9;
`;

const RoomImg = styled.img`
  ${boxSizeSet('150px', '200px')};
  object-fit: cover;
`;

const RoomInfo = styled.div`
  ${flexSet('space-between', 'flex-start', 'column')};
  width: 1030px;
  padding: 15px;

  div:first-child {
    ${flexSet('flex-start', 'inherit', 'row')};
  }
  div:last-child {
    ${flexSet('center', 'flex-start', 'column')};
  }
`;

const RoomTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const LimitPersonnel = styled.span`
  ${fontSet('13px', '#888', 'inherit', '1.08')};
  margin-bottom: 10px;
`;

const Cost = styled.span`
  ${fontSet('18px', 'inherit', '700', '1')};
  margin-right: 5px;
`;
