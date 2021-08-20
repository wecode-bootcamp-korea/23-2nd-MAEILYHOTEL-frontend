import React from 'react';

import styled from 'styled-components';
import { NavModal } from './NavModal';

export const IconsWrapper = ({ modal, modalOn, modalOff, userInfo }) => {
  return (
    <Icons>
      <i className="fas fa-list-ul" onClick={modalOn} />
      {modal && <NavModal handleModal={modalOff} userInfo={userInfo} />}
    </Icons>
  );
};

const Icons = styled.span`
  color: black;
  cursor: pointer;
`;
