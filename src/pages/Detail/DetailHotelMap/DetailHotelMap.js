import React from 'react';
import { AddressBox } from './AddressBox';

import styled from 'styled-components';
import { boxSizeSet } from '../../../styles/Mixins';

export const DetailHotelMap = ({ mapModalActive, address }) => {
  return (
    <HotelMapWarp onClick={mapModalActive}>
      <HotelMapInner>
        <AddressBox address={address}>
          <HotelAddressIcon color="#74B9ff">
            <i className="far fa-map" />
          </HotelAddressIcon>
        </AddressBox>
      </HotelMapInner>
    </HotelMapWarp>
  );
};

const HotelMapWarp = styled.div`
  ${boxSizeSet('inherit', '150px', '30px 0 0 0', '10px')};
  background-image: url('/images/map_background.jpg');
  background-size: cover;
`;

const HotelMapInner = styled.div`
  ${boxSizeSet('inherit', '130px', 'none', '10px 20px')};
  background-color: white;
`;

const HotelAddressIcon = styled.div`
  padding: 7px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  color: white;
`;
