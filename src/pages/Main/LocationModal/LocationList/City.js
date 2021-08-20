import React from 'react';
import { CityListWrap } from './CityListWrap';

import styled from 'styled-components';
import { flexSet } from '../../../../styles/Mixins';

export const City = ({ ...rest }) => {
  return (
    <StyledCity>
      <CityTab>
        <CityListWrap {...rest} />
      </CityTab>
    </StyledCity>
  );
};

const CityTab = styled.div`
  ${flexSet('flex-start', 'center', 'column')}
  height: 800px;
  padding: 15px 0;
  background-color: transparent;
`;

const StyledCity = styled.div`
  ${flexSet('center', 'flex-start', 'column')}
  width: 100%;
  background-color: white;
`;
