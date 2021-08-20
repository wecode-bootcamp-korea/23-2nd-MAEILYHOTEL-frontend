import React, { useState } from 'react';
import { City } from './City';
import { LOCATION_LIST } from './LOCATION_LIST';
import { RegionListWrap } from './RegionListWrap';

import styled from 'styled-components';
import { flexSet } from '../../../../styles/Mixins';

export const Region = ({
  setStayLocation,
  setLocationModalOff,
  stayDate,
  linkUrl,
}) => {
  const [selectedRegion, setSelectedRegion] = useState(0);

  return (
    <StyledRegion>
      <RegionTab>
        <RegionListWrap setSelectedRegion={setSelectedRegion} />
      </RegionTab>
      <City
        cityList={LOCATION_LIST[selectedRegion].city}
        setStayLocation={setStayLocation}
        setLocationModalOff={setLocationModalOff}
        stayDate={stayDate}
        linkUrl={linkUrl}
      />
    </StyledRegion>
  );
};

const RegionTab = styled.div`
  ${flexSet('flex-start', 'center', 'column')}
  height: 800px;
  padding: 15px 0;
  background-color: lightgray;
`;

const StyledRegion = styled.div`
  ${flexSet('center', 'flex-start', 'row')}
  width: 100%;
  background-color: lightgray;
`;
