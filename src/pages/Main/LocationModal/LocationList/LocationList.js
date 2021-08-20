import React from 'react';
import { Region } from './Region';

import styled from 'styled-components';
import { flexSet } from '../../../../styles/Mixins';

export const LocationList = ({ ...rest }) => {
  return (
    <StyledLocationList>
      <Region {...rest} />
    </StyledLocationList>
  );
};

const StyledLocationList = styled.div`
  ${flexSet('flex-start', 'center', 'row')}
  width: 100%;
  background-color: white;
`;
