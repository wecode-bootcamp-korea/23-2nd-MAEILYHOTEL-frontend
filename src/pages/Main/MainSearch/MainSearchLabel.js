import React from 'react';

import styled, { css } from 'styled-components';
import { flexSet } from '../../../styles/Mixins';

export const MainSearchLabel = ({ text, bgColor, ...rest }) => {
  return (
    <SearchLabel bgColor={bgColor}>
      <SearchText>{text}</SearchText>
      <SearchInput bgColor={bgColor} {...rest} />
    </SearchLabel>
  );
};

const SearchText = styled.span`
  margin-left: 10px;
  margin-bottom: 5px;
  font-size: 12px;
`;

const SearchInput = styled.input`
  width: 180px;
  padding: 0 10px;
  border: none;

  ${({ bgColor, color, fontSize, textAlign }) => css`
    background-color: ${bgColor || 'white'};
    color: ${color || 'black'};
    font-size: ${fontSize || '16px'};
    text-align: ${textAlign || 'left'};
  `}
  outline: none;
`;

const SearchLabel = styled.label`
  position: relative;
  ${flexSet('center', 'flex-start', 'column')}
  height: 60px;
  padding: 0 35px;
  border-radius: 30px;
  background-color: ${({ bgColor }) => bgColor || 'white'};
  z-index: 3;
`;
