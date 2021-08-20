import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { flexSet } from '../../../../styles/Mixins';

export const CityListWrap = ({
  cityList,
  setStayLocation,
  setLocationModalOff,
  stayDate,
  linkUrl,
}) => {
  const list = cityList.map((city, idx) => {
    return (
      <CityList key={idx}>
        <StyledLink to={linkUrl && stayDate[1] ? linkUrl : ''}>
          <button
            name={city}
            onClick={e => {
              setStayLocation(e.target.name);
              setLocationModalOff(false);
            }}
          >
            {city}
          </button>
        </StyledLink>
      </CityList>
    );
  });

  return <>{list}</>;
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CityList = styled.div`
  ${flexSet('center', 'center')}
  width : 200px;
  height: 80px;
  background-color: transparent;

  button {
    width: 200px;
    height: 80px;
    border: none;
    background-color: transparent;
    color: black;
    font-size: 25px;
  }
`;
