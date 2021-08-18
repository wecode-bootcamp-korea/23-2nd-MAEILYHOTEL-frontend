import React from 'react';
import { Icon } from './Icon';
import styled from 'styled-components';
import { flexSet, fullScreen } from '../../styles/Mixins';

export const Nav = () => {
  return (
    <NavContainer>
      <NavWrap>
        <NavLogo alt="Logo" src="/images/logo.png" />
        <NavIconWrap>
          <Icon LinkUrl="" />
        </NavIconWrap>
      </NavWrap>
    </NavContainer>
  );
};

const NavIconWrap = styled.div`
  ${flexSet('initial', 'center', 'row')}
  margin-right: 20px;
  font-size: 25px;
`;

const NavLogo = styled.img`
  width: 200px;
  height: 33px;
`;

const NavWrap = styled.div`
  ${flexSet('space-between', 'center', 'row')}
  width: 100%;
  padding: 10px 0;
  max-width: 1180px;
`;

const NavContainer = styled.div`
  ${flexSet('center', 'initial', 'row')}
  ${fullScreen}
`;
