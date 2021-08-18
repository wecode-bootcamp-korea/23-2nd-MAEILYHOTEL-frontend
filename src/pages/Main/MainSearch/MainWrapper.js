import React from 'react';
import { MainSearchForm } from './MainSearchForm';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Mixins';

export const MainWrapper = () => {
  return (
    <MainWrap>
      <MainImg
        alt="Main Background Image"
        src="/images/Main/MainBackGroundImg.jpg"
        width="100%"
        height="100%"
      />
      <MainSearchForm />
    </MainWrap>
  );
};

const MainImg = styled.img`
  z-index: -1;
`;

const MainWrap = styled.div`
  position: relative;
  ${flexSet('center', 'center', 'column')}
  width: 100%;
  max-width: 1180px;
  margin-top: 50px;
`;
