import React from 'react';
import { DetailHotelImage } from './DetailHotelImage/DetailHotelImage';
import { DetailHotelUsingHour } from './DetailHotelUsingHour/DetailHotelUsingHour';

import styled from 'styled-components';
import { flexSet } from '../../styles/Mixins';

export const DetailCommon = ({ images, check_in, check_out, children }) => {
  return (
    <DetailSectionWrap>
      <DetailHotelImage images={images} />
      {children}
      <DetailHotelUsingHour check_in={check_in} check_out={check_out} />
    </DetailSectionWrap>
  );
};

const DetailSectionWrap = styled.div`
  width: 100%;
  max-width: 1180px;
  ${flexSet('center', 'inherit', 'column')};
`;
