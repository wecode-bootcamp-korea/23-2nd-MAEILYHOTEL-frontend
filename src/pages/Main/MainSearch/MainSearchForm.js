import React from 'react';
import { MainSearchLabel } from './MainSearchLabel';

import styled from 'styled-components';
import { flexSet } from '../../../styles/Mixins';

export const MainSearchForm = ({
  setCalendarOn,
  setLocationModalOn,
  stayLocation,
  stayDate,
}) => {
  return (
    <StyledSearchForm>
      <MainSearchLabel
        text="지역"
        type="button"
        value={stayLocation ? stayLocation : '어디로 떠나시나요?'}
        onClick={setLocationModalOn}
      />
      <MainSearchLabel
        text="날짜"
        type="button"
        value={
          stayDate[1] ? `${stayDate[0]} ~ ${stayDate[1]}` : '체크인, 체크아웃'
        }
        onClick={setCalendarOn}
      />
    </StyledSearchForm>
  );
};

const StyledSearchForm = styled.form`
  position: absolute;
  ${flexSet('center', 'center')}
  background-color: white;
  border-radius: 30px;
`;
