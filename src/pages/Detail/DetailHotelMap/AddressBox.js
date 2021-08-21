import React from 'react';

import styled from 'styled-components';
import { boxSizeSet, flexSet, fontSet } from '../../../styles/Mixins';

export const AddressBox = ({ address, children }) => {
  return (
    <AddressBoxWrap>
      <HotelAddress>{address}</HotelAddress>
      {children}
    </AddressBoxWrap>
  );
};

const AddressBoxWrap = styled.div`
  ${boxSizeSet('100%', 'none', '0', '20px 20px')};
  ${flexSet('space-between', 'inherit', 'inherit')}
  border-bottom: 1px solid #e7e7e7;
  cursor: pointer;
`;

const HotelAddress = styled.span`
  ${fontSet('14px', '#4d4d4d')};
  ${flexSet('center', 'center', 'inherit')};
  padding-right: 10px;
`;
