import React from 'react';
import { MainWrapper } from './MainSearch/MainWrapper';
import styled from 'styled-components';
import { flexSet, fullScreen } from '../../styles/Mixins';

export const Main = () => {
  return (
    <Section>
      <MainWrapper />
    </Section>
  );
};

const Section = styled.div`
  ${flexSet('center', 'center')}
  ${fullScreen}
`;
