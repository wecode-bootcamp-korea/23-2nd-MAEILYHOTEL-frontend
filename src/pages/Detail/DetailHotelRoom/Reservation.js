import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { boxSizeSet, flexSet, listHover } from '../../../styles/Mixins';

export const Reservation = ({ roomData }) => {
  const history = useHistory();
  return (
    <StyledReservation
      onClick={() => {
        history.push('/credit', { roomData });
      }}
    >
      예약하기
    </StyledReservation>
  );
};

const StyledReservation = styled.div`
  position: absolute;
  ${flexSet('center', 'center', 'row')}
  ${boxSizeSet('150px', '200px')}
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #74b9ff;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.15rem;
  opacity: 0;

  &:hover {
    animation: ${listHover} 0.3s forwards ease-in-out;
  }
`;
