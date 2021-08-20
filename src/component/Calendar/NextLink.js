import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const NextLink = ({ linkInfo, dateRange, setCalendarOff }) => {
  const { stayLocation, linkUrl, linkButtonText, redirectComponent } = linkInfo;
  const [path, query] = linkUrl.split('?');
  const [redirectPath, redirectQuery] = redirectComponent.split('?');

  return (
    <StyledLink
      to={{
        pathname: stayLocation ? path : redirectPath,
        search: stayLocation ? query : redirectQuery,
      }}
    >
      <NextStepButton
        disabled={!(dateRange[1] !== null || stayLocation)}
        onClick={setCalendarOff}
      >
        {linkButtonText}
      </NextStepButton>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 50%;
  text-decoration: none;
  transform: translate(-50%, 0);
`;

const NextStepButton = styled.button`
  width: 70vw;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  font-size: 25px;
  letter-spacing: 0.15rem;

  &:disabled {
    background-color: lightgray;
    color: black;
  }
`;
