import React from 'react';
import styled from 'styled-components';
import { fontSet } from '../../../styles/Mixins';

export const InfoList = props => {
  return (
    <InfoText>
      <InfoListNum>{props.num}</InfoListNum>
      {props.text}
    </InfoText>
  );
};

const InfoText = styled.div`
  ${fontSet('15px', '#4d4d4d', '600', '1.5')};
  margin-left: 35px;
`;

const InfoListNum = styled.span`
  ${fontSet('20px', '#c5c5c5', 'inherit', '1.5')};
  margin: 0 20px;
`;
