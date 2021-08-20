import React from 'react';
import { Link } from 'react-router-dom';
import { calcDateRange } from './CalendarLogic';

import styled from 'styled-components';

export const NextLink = ({
  linkInfo,
  dateRange,
  setCalendarOff,
  redirectComponent,
}) => {
  const { stayLocation, linkUrl, linkButtonText } = linkInfo;
  const stayInfo = calcDateRange(dateRange);

  return (
    <StyledLink
      to={{
        pathname: stayLocation ? linkUrl : redirectComponent,
        state: { stayInfo },
      }}
    >
      <NextStepButton
        disabled={dateRange[1] !== null || stayLocation ? false : true}
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
