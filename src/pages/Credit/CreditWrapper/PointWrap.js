import React from 'react';

import styled from 'styled-components';
import { flexSet } from '../../../styles/Mixins';

export const PointWrap = ({ point, total, discount }) => {
  return (
    <StyledPointWrap>
      <Point>
        <span>현재포인트</span>
        <span>{' ₩ ' + Math.floor(point, -2).toLocaleString()}</span>
      </Point>
      <Point>
        <span>차감포인트</span>
        <span>
          {' ₩ ' + total.toLocaleString() + ' - '}
          {' ₩ ' + (total * discount).toLocaleString()} =
          {' ₩ ' + (total - total * discount).toLocaleString()}
        </span>
      </Point>
      <Point>
        <span>잔여포인트</span>
        <span>
          {' ₩ ' + (point - (total - total * discount)).toLocaleString()}
        </span>
      </Point>
    </StyledPointWrap>
  );
};

const Point = styled.div`
  ${flexSet('space-between', 'center', 'row')}
  width: 100%;
  margin-bottom: 35px;
  font-size: 25px;

  span:last-child {
    color: gray;
  }

  .centerLine {
    text-decoration-line: line-through;
  }
`;

const StyledPointWrap = styled.div`
  ${flexSet('center', 'flex-start', 'column')}
  width: 100%;
  margin-top: 25px;
  padding: 0 80px;
  border-bottom: 1px solid lightgray;
`;
