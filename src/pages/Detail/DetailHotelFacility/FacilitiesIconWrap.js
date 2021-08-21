import React from 'react';

import styled from 'styled-components';
import { flexSet } from '../../../styles/Mixins';

export const FacilitiesIconWrap = ({ text }) => {
  return (
    <FacilityIconBox>
      <Icon className={FACILITIES_LIST[text]} />
      <IconTitle>{text}</IconTitle>
    </FacilityIconBox>
  );
};

const FacilityIconBox = styled.div`
  ${flexSet('inherit', 'inherit', 'column')};
  text-align: center;
  width: 70px;
  font-size: 14px;
`;

const Icon = styled.i`
  font-size: 50px;
`;

const IconTitle = styled.span`
  margin-top: 20px;
`;

const FACILITIES_LIST = {
  주차가능: 'fas fa-car',
  조식당: 'fas fa-utensils',
  무료Wifi: 'fas fa-wifi',
};
