import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { useProfile } from '../../hooks';
import { theme } from '../../styles/theme';

export const HotelList = ({ image, name, price, id }) => {
  const history = useHistory();
  const location = useLocation();

  function handleClick() {
    history.push(`/stays/${id}${location.search}`);
  }

  const [profile, profileLoading] = useProfile();

  const { discount } = profile;
  return (
    <Hotel onClick={handleClick}>
      <Search>
        <img alt="rose" src={image} />
        <i class="far fa-heart" />
      </Search>
      <Info>
        <Name>{name}</Name>
        {/* <Summary>{content}</Summary> */}
        <Price>
          <span>{discount * 100}%</span>
          <span>{' ₩ ' + (price - price * discount)}</span>
          <span>{' ₩ ' + price}</span>
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
  font-size: 18px;
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
