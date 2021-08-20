import React from 'react';

import styled from 'styled-components';
import { flexSet } from '../../../styles/Mixins';

export const LocationListTabTitle = () => {
  return (
    <StyledLocationListTabTitle>
      <TabTitleWrap>
        <button>지역명</button>
      </TabTitleWrap>
      <TabTitleWrap>123</TabTitleWrap>
    </StyledLocationListTabTitle>
  );
};

const TabTitleWrap = styled.div`
  ${flexSet('center', 'center', 'row')}
  width: 100%;
  background-color: white;
  margin: 15px 0;

  button {
    border: none;
    background-color: transparent;
    font-size: 25px;
  }

  &:last-child {
    visibility: hidden;
  }
`;

const StyledLocationListTabTitle = styled.div`
  ${flexSet('flex-start', 'center', 'row')}
  width: 100%;
  background-color: white;
  border-bottom: 1px solid lightgray;
`;
