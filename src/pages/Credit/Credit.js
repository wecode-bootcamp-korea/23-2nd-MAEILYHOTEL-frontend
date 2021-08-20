import React from 'react';
import { useHistory } from 'react-router';
import { CreditWrapper } from './CreditWrapper/CreditWrapper';

import styled from 'styled-components';
import { flexSet, fullScreen } from '../../styles/Mixins';

export const Credit = () => {
  const history = useHistory();

  const { location } = history;
  const { state } = location;
  const { roomData } = state;

  return (
    <Section>
      <CreditWrapper roomData={roomData} />
    </Section>
  );
};

const Section = styled.section`
  ${flexSet('center', 'center')}
  ${fullScreen}
  margin-top: 70px;
`;
