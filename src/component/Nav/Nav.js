import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';
import { useProfile } from '../../hooks';
import { IconsWrapper } from './IconsWrapper';
import { LoginButton } from './LoginButton';

import styled from 'styled-components';
import { flexSet, fullScreen } from '../../styles/Mixins';

export const Nav = () => {
  const [modalOn, setModalOn] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const [userProfile, loading] = useProfile(location.pathname);

  const { point, name } = userProfile;

  const goToMain = () => {
    history.push('/');
  };

  return (
    <NavContainer>
      <NavWrap>
        <NavLogo alt="Logo" src="/images/logo.png" onClick={goToMain} />
        <NavIconWrap>
          {!(name && point) && <LoginButton />}
          <IconsWrapper
            modal={modalOn}
            modalOn={() => {
              setModalOn(true);
            }}
            modalOff={() => {
              setModalOn(false);
            }}
            userInfo={userProfile}
          />
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
  cursor: pointer;
`;

const NavWrap = styled.div`
  ${flexSet('space-between', 'center', 'row')}
  width: 100%;
  height: 67px;
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
