import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { NavModal } from './NavModal';

export const IconsWrapper = ({ LinkUrl }) => {
  const [modal, setmodal] = useState(false);
  const handleModal = () => {
    setmodal(!modal);
  };
  return (
    <StyledLink to={LinkUrl}>
      <i className="fas fa-list-ul" onClick={handleModal} />
      {modal && <NavModal handleModal={handleModal} />}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  color: black;
`;
