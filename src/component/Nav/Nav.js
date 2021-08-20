import React from 'react';
import { IconsWrapper } from './IconsWrapper';
import { LoginButton } from './LoginButton';
import { USER_INFO } from '../../pages/Redirect/Redirect';

import styled from 'styled-components';
import { flexSet, fullScreen } from '../../styles/Mixins';

export const Nav = () => {
  const userInfo = JSON.parse(localStorage.getItem(USER_INFO));
  const { name } = userInfo || {};
  return (
    <NavContainer>
      <NavWrap>
        <NavLogo alt="Logo" src="/images/logo.png" />
        <NavIconWrap>
          {name ? <Welcome>{name}님 환영합니다!</Welcome> : <LoginButton />}
          <IconsWrapper LinkUrl="" />
        </NavIconWrap>
      </NavWrap>
    </NavContainer>
  );
};

const Welcome = styled.span`
  font-size: 22px;
  margin-right: 20px;
  letter-spacing: 0.15rem;
`;

const NavIconWrap = styled.div`
  ${flexSet('center', 'center', 'row')}
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
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 98;
`;
