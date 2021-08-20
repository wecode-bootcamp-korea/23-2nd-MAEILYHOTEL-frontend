import React from 'react';
import { MainSearchForm } from './MainSearchForm';

import styled from 'styled-components';
import { flexSet, fullScreen } from '../../../styles/Mixins';

export const MainWrapper = ({
  setCalendarOn,
  setLocationModalOn,
  stayLocation,
  stayDate,
}) => {
  return (
    <MainWrap>
      <MainImg
        alt="Main Background Image"
        src="/images/Main/MainBackGroundImg.jpg"
        width="100%"
        height="100%"
      />
      <MainFormBlock>
        <MainSearchForm
          setCalendarOn={setCalendarOn}
          setLocationModalOn={setLocationModalOn}
          stayLocation={stayLocation}
          stayDate={stayDate}
        />
      </MainFormBlock>
    </MainWrap>
  );
};

const MainImg = styled.img`
  position: fixed;
  opacity: 0.7;
  z-index: 0;
`;

const MainFormBlock = styled.div`
  position: relative;
  ${flexSet('center', 'center', 'column')}
  width: 100%;
  max-width: 1180px;
  z-index: 1;
`;

const MainWrap = styled.div`
  position: relative;
  ${flexSet('center', 'center', 'column')}
  ${fullScreen}
  height: 100vh;
  background-color: black;
`;
