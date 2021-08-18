import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HotelList = ({
  image,
  name,
  content,
  percent,
  price,
  preprice,
}) => {
  return (
    <Hotel>
      <Search>
        <img alt="rose" src={image} />
        <i class="far fa-heart" />
        <Overlay>
          <Grade>특2급</Grade>
          <span>(트루리뷰 3000개) </span>
          <Point>적립</Point>
        </Overlay>
      </Search>
      <Info>
        <Name>{name}</Name>
        <Summary>{content}</Summary>
        <Price>
          <span>{percent}</span> <span>{price}</span>
          <span>{preprice}</span>
        </Price>
      </Info>
    </Hotel>
  );
};

const { gray_3 } = theme.colors;

const Hotel = styled.ul`
  background-color: white;
  border-top: 18px solid #f8f8f9;
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

const Overlay = styled.div`
  display: flex;
  position: absolute;
  color: white;
  bottom: 10px;
  font-size: 12px;
`;

const Grade = styled.div`
  border: 1px soild white;
  padding: 0px 10px;
`;

const Point = styled.div`
  position: relative;
  left: 1000px;
`;
const Info = styled.div`
  padding: 14px 15px;
  border-bottom: 1px solid lightgray;
`;

const Name = styled.div`
  font-size: 18px;
  margin-bottom: 6px;
`;

const Summary = styled.div`
  font-size: 15px;
  color: ${gray_3};
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
