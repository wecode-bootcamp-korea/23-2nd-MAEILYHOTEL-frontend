import React from 'react';

import styled from 'styled-components';
import { flexSet } from '../../../styles/Mixins';

export const LocationListTitle = ({ setLocationModalOff, titleText }) => {
  return (
    <StyledLocationListTitle>
      <LocationListClose>
        <button onClick={setLocationModalOff}>X</button>
      </LocationListClose>
      <LocationListTitleText>
        <span>{titleText}</span>
      </LocationListTitleText>
    </StyledLocationListTitle>
  );
};

const LocationListClose = styled.div`
  ${flexSet('flex-start', 'center', 'row')}
  margin: 0 auto 0 25px;
  button {
    border: none;
    background-color: transparent;
    font-size: 40px;
  }
`;

const LocationListTitleText = styled.div`
  ${flexSet('flex-start', 'center', 'row')}
  margin: 20px auto 20px 0;
  font-size: 40px;
  transform: translate(-50%, 0);
`;

const StyledLocationListTitle = styled.div`
  ${flexSet('center', 'center', 'row')}
  width: 100%;
  border-bottom: 1px solid lightgray;
`;
