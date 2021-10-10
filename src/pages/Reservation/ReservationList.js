import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ReservationList = ({ image, name, price, id, key }) => {
  const history = useHistory();
  function handleClick() {
    history.push(`/detail/${id}`);
  }

  return (
    <Hotel onClick={handleClick}>
      <Search>
        <img alt="rose" src={image} />
      </Search>
      <Info>
        <Name>{name}</Name>
        <Price>
          <span>74%</span>
          <span>{price}</span>
          <span>27500원</span>
        </Price>
      </Info>
    </Hotel>
  );
};

const { gray_3 } = theme.colors;

const Hotel = styled.ul`
  background-color: white;
  border-top: 18px solid #f8f8f9;
  cursor: pointer;
`;

const Search = styled.div`
  width: 1180px;
  position: relative;

  img {
    width: 100%;
    height: 177px;
    object-fit: cover;
  }

  i {
    position: absolute;
    right: 15px;
    color: white;
    top: 10px;
    font-size: 20px;
  }
`;

const Info = styled.div`
  padding: 14px 15px;
  border-bottom: 1px solid lightgray;
`;

const Name = styled.div`
  font-size: 15px;
  margin-bottom: 6px;
`;

const Price = styled.div`
  span:nth-child(1) {
    font-size: 18px;
    color: red;
  }
  span:nth-child(2) {
    color: black;
    font-size: 18px;
  }
  span:nth-child(3) {
    color: ${gray_3};
    font-size: 13px;
    text-decoration: line-through;
  }
`;
