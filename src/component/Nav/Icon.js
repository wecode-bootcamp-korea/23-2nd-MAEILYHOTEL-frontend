import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Icon = ({ LinkUrl }) => {
  return (
    <StyledLink to={LinkUrl}>
      <i className="fas fa-list-ul" />
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  color: black;
`;
