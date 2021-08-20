import React from 'react';
import { useLocation, useHistory } from 'react-router';
import { useFetch } from '../../hooks';

import { HotelList } from './HotelList';

import styled from 'styled-components';
import { flexSet } from '../../styles/Mixins';

export const List = () => {
  const location = useLocation();
  const history = useHistory();

  const [hotels, loading] = useFetch(
    `http://10.58.2.242:8000/stays${location.search}`
  );
  let [path, query] = `/list${location.search}`.split('?');
  const [stayLocation, checkIn, checkOut] = query.split('&');

  const changeAllList = () => {
    history.push(`${path}?${stayLocation}&${checkIn}&${checkOut}`);
  };

  const changeHotelList = () => {
    const query = '&category=1';
    history.push(`${path}?${stayLocation}&${checkIn}&${checkOut}&${query}`);
  };

  const changeMotelList = () => {
    const query = `&category=2`;
    history.push(`${path}?${stayLocation}&${checkIn}&${checkOut}&${query}`);
  };

  return (
    <Body>
      <Filter>
        <Content onClick={changeAllList}>전체</Content>
        <Content onClick={changeHotelList}>호텔</Content>
        <Content onClick={changeMotelList}>모텔</Content>
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

const Filter = styled.div`
  border-bottom: 1px solid #f1f1f1;
  ${flexSet('', 'center', 'row')}
  height: 39px;
  margin-top: 70px;
`;

const Content = styled.button`
  font-size: 14px;
  color: gray;
  padding: 11px 12px;
  background-color: white;
  cursor: pointer;
  border: none;
`;
