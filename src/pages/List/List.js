import React, { useState, useEffect } from 'react';
import { HotelList } from './HotelList';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { flexSet } from '../../styles/Mixins';

export const List = () => {
  const [hotels, sethotels] = useState([]);
  const history = useHistory();
  function handleClick() {
    history.push('/detail');
  }

  useEffect(() => {
    fetch('/data/listMockdata.json')
      .then(res => res.json())
      .then(data => {
        sethotels(data);
      });
  }, []);

  return (
    <Body>
      <Graybox>
        <i class="fas fa-search" />
      </Graybox>
      <Filter>
        <Content>전체</Content>
        <Content>호텔</Content>
        <Content>부띠끄/모텔</Content>
      </Filter>
      {/* <Count>결과 1020건</Count> */}
      {hotels.map(({ id, name, content, image, price, percent, preprice }) => {
        return (
          <HotelList
            key={id}
            name={name}
            content={content}
            image={image}
            price={price}
            percent={percent}
            preprice={preprice}
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
