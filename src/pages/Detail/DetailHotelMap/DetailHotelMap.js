import React from 'react';
import styled from 'styled-components';
import { boxSizeSet, flexSet, fontSet } from '../../../styles/Mixins';

export const DetailHotelMap = () => {
  return (
    <HotelMapWarp>
      <HotelMapInner>
        <AddressBox>
          <HotelAddress>서울 용산구 소월로 322</HotelAddress>
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
  background-image: url('./images/map_background.jpg');
  background-size: cover;
`;

const HotelMapInner = styled.div`
  ${boxSizeSet('inherit', '130px', 'none', '10px 20px')};
  background-color: white;
`;

const AddressBox = styled.div`
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

const HotelAddressIcon = styled.div`
  padding: 7px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  color: white;
`;
