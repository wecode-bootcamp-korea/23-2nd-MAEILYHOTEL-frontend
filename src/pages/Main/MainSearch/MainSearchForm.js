import React from 'react';
import { MainSearchLabel } from './MainSearchLabel';

import styled from 'styled-components';
import { flexSet } from '../../../styles/Mixins';

export const MainSearchForm = () => {
  return (
    <StyledSearchForm>
      <MainSearchLabel text="지역" placeholder="어디로 여행가시나요?" />
      <MainSearchLabel
        text="날짜"
        placeholder="체크인, 체크아웃"
        type="button"
        value="체크인, 체크아웃"
      />
      <MainSearchLabel
        type="button"
        value="검색"
        bgColor="#74b9ff"
        color="white"
        textAlign="center"
        fontSize="25px"
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
