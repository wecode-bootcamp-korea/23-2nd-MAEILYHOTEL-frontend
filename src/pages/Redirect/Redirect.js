import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useKakaoLogin, useFetch } from '../../hooks';

import styled, { keyframes } from 'styled-components';
import { flexSet, fullScreen } from '../../styles/Mixins';

export const Redirect = () => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = location.search.split('?code=')[1];
  const [userInfo, loading, errorText] = useKakaoLogin(queryParams);

  useEffect(() => {
    if (!loading && !errorText) {
      localStorage.setItem(USER_INFO, userInfo.token);
      history.push('/');
    } else if (loading && errorText) {
      alert('죄송합니다. 현재 서버가 불안정하니 잠시 후에 다시 시도해주세요.');
      history.push('/');
    }
  }, [userInfo, loading, errorText]);

  return (
    <Section>
      <StyledImg alt="Loading now..." src="/Images/Redirect/Loading2.png" />
    </Section>
  );
};

export const USER_INFO = 'login_token';

const BingleBingle = keyframes`
from {
  transform : rotateZ(0);
}
to {
  transform : rotateZ(360deg);
}`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  animation: ${BingleBingle} 1.5s infinite linear;
`;

const Section = styled.section`
  ${flexSet('center', 'center')}
  ${fullScreen}
  position: fixed;
  height: 100vh;
`;
