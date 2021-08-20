import React from 'react';
import { LocationListTitle } from './LocationListTitle';
import { LocationListTabTitle } from './LocationListTabTitle';
import { LocationList } from './LocationList/LocationList';

import styled from 'styled-components';
import { flexSet, fullScreen } from '../../../styles/Mixins';

export const LocationModal = ({
  setLocationModalOff,
  setStayLocation,
  titleText,
  stayDate,
  linkUrl,
}) => {
  return (
    <LocationModalWrapper>
      <LocationListWrapper>
        <LocationListTitle
          titleText={titleText}
          setLocationModalOff={setLocationModalOff}
        />
        <LocationListTabTitle />
        <LocationList
          setStayLocation={setStayLocation}
          setLocationModalOff={setLocationModalOff}
          stayDate={stayDate}
          linkUrl={linkUrl}
        />
      </LocationListWrapper>
    </LocationModalWrapper>
  );
};

const LocationListWrapper = styled.div`
  ${flexSet('flex-start', 'center', 'column')}
  width: 100%;
  max-width: 1180px;
  height: 900px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 20px 20px 20px 1px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`;

const LocationModalWrapper = styled.div`
  position: fixed;
  ${flexSet('center', 'center')}
  ${fullScreen}
  height: 100vh;
  z-index: 100;
`;
