import React from 'react';

import { LOCATION_LIST } from './LOCATION_LIST';

import styled from 'styled-components';
import { flexSet } from '../../../../styles/Mixins';

export const RegionListWrap = ({ setSelectedRegion }) => {
  const list = LOCATION_LIST.map((region, idx) => {
    const { name } = region;
    return (
      <RegionList key={name + 1}>
        <button
          name={idx}
          onClick={e => {
            setSelectedRegion(e.target.name);
          }}
        >
          {name}
        </button>
      </RegionList>
    );
  });

  return <>{list}</>;
};

const RegionList = styled.div`
  ${flexSet('center', 'center', 'row')}
  width : 200px;
  height: 80px;
  background-color: lightgray;

  button {
    width: 200px;
    height: 80px;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 25px;

    &:focus {
      background-color: rgba(255, 255, 255, 0.5);
      color: black;
    }
  }
`;
