import React from 'react';
import { KAKAO_OAUTH } from '../../config';

import styled from 'styled-components';
import { flexSet } from '../../styles/Mixins';

export const LoginButton = () => {
  return (
    <a href={KAKAO_OAUTH}>
      <Button>
        <img alt="LoginButton" src="/images/Nav/LoginButton.png" />
      </Button>
    </a>
  );
};

const Button = styled.button`
  ${flexSet('center', 'center', 'row')}
  margin-right: 30px;
  border: none;
  background-color: white;
  font-size: 16px;
  letter-spacing: 0.15rem;
  outline: none;
`;
