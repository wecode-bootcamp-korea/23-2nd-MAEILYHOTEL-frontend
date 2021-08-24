import React, { useState, useEffect } from 'react';

import { HotelList } from './HotelList';

import styled from 'styled-components';
import { flexSet } from '../../styles/Mixins';

export const List = () => {
  const [hotels, sethotels] = useState([]);
  const [category, setcategory] = useState('');

  //'/data/listMockdata.json'
  useEffect(() => {
    fetch(
      'http://10.58.2.242:8000/stays?category=1&location=서귀포시&CheckIn=2021-08-30&CheckOut=2021-09-03'
    )
      .then(data => data.json())
      .then(data => {
        sethotels(data);
      });
  }, []);
  console.log(hotels);
  return (
    <Body>
      <Graybox>
        <i class="fas fa-search" />
      </Graybox>
      <Filter>
        <Content>전체</Content>
        <Content>호텔</Content>
        <Content>모텔</Content>
      </Filter>
      {/* <Count>결과 1020건</Count> */}
      {hotels.staylist &&
        hotels.staylist.map(({ id, name, image_url, price, idx }) => {
          return (
            <HotelList
              key={id}
              name={name}
              image={image_url}
              price={price}
              id={id}
            />
          );
        })}
    </Body>
  );
};

const Body = styled.div`
  width: 1180px;
  margin: 0 auto;
`;

const Graybox = styled.div`
  background-color: #f8f8f9;
  width: 1150px;
  height: 40px;
  margin: 8px 12px;
  position: relative;
  i {
    position: absolute;
    top: 13px;
    left: 10px;
  }
`;

const Filter = styled.div`
  border-bottom: 1px solid #f1f1f1;
  ${flexSet('', 'center', 'row')}
  height: 39px;
`;

const Content = styled.button`
  font-size: 14px;
  color: gray;
  padding: 11px 12px;
  background-color: white;
  cursor: pointer;
  border: none;
`;

const Count = styled.div`
  font-size: 14px;
  padding: 16px 16px 6px;
  background-color: #f8f8f9;
`;
