import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import {
  boxSizeSet,
  flexSet,
  fontSet,
  listHover,
} from '../../../styles/Mixins';

export const RoomType = ({ list, isFilterHandle }) => {
  const totalPrice = Math.ceil(
    Number(`${list.option[0].price.total}`)
  ).toLocaleString();

  const avgPrice = Math.ceil(
    Number(`${list.option[0].price.avg}`)
  ).toLocaleString();

  const history = useHistory();

  return (
    <>
      <RoomTypeWrap>
        <RoomImg src={list.image_url} alt="room" />
        <RoomInfo>
          <div>
            <RoomTitle>{list.name}</RoomTitle>
          </div>
          <div>
            <LimitPersonnel>
              {list.people}인 기준 / 최대 {list.people}인
            </LimitPersonnel>
            <Cost>{`₩ ${isFilterHandle ? avgPrice : totalPrice}`}</Cost>
          </div>
        </RoomInfo>
        <Reservation
          onClick={() => {
            history.push('/credit');
          }}
        >
          예약하기
        </Reservation>
      </RoomTypeWrap>
    </>
  );
};

const RoomTypeWrap = styled.section`
  ${flexSet('flex-start', 'center', 'row')};
  border-bottom: 10px solid #f8f8f9;
  cursor: pointer;
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

const Reservation = styled.div`
  position: absolute;
  ${flexSet('center', 'center', 'row')}
  ${boxSizeSet('150px', '200px')}
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #74b9ff;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.15rem;
  opacity: 0;

  &:hover {
    animation: ${listHover} 0.3s forwards ease-in-out;
  }
`;
