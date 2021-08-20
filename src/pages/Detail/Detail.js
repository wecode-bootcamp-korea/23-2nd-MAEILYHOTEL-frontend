import React, { useEffect, useState } from 'react';
import { DetailHotelImage } from './DetailHotelImage/DetailHotelImage';
import { DetailHotelTitle } from './DetailHotelTitle/DetailHotelTitle';
import { DetailHotelRoom } from './DetailHotelRoom/DetailHotelRoom';
import { DetailHotelInfo } from './DetailHotelInfo/DetailHotelInfo';
import { DetailHotelFacility } from './DetailHotelFacility/DetailHotelFacility';
import { DetailHotelMap } from './DetailHotelMap/DetailHotelMap';
import { DetailHotelUsingHour } from './DetailHotelUsingHour/DetailHotelUsingHour';
import { Calendar } from '../../component/Calendar';

import styled from 'styled-components';
import { flexSet, fullScreen } from '../../styles/Mixins';

export const Detail = () => {
  const [hotelData, setHotelData] = useState([]);
  const [calendarOn, setCalendarOn] = useState(false);

  useEffect(() => {
    fetch('/data/HOTEL_DATA.json')
      .then(res => res.json())
      .then(res => {
        setHotelData(res);
      });
  }, []);

  const { grade, title, cost } = hotelData[0] || {};

  return (
    <>
      <DetailSection>
        <DetailSectionWrap>
          <DetailHotelImage />
          <DetailHotelTitle grade={grade} title={title} cost={cost} />
          {/* <Review>review</Review>     //리뷰 (추가 기능 구현 사항)*/}
          <DetailHotelRoom
            setCalendarOn={() => {
              setCalendarOn(true);
            }}
          />
          <DetailHotelInfo />
          <DetailHotelFacility />
          <DetailHotelMap />
          <DetailHotelUsingHour />
        </DetailSectionWrap>
      </DetailSection>
      {calendarOn && (
        <Calendar
          setCalendarOn={() => {
            setCalendarOn(false);
          }}
        />
      )}
    </>
  );
};

const DetailSection = styled.section`
  ${fullScreen};
  display: flex;
  justify-content: center;
`;

const DetailSectionWrap = styled.div`
  width: 100%;
  max-width: 1180px;
  ${flexSet('center', 'inherit', 'column')};
`;

// 리뷰 레이아웃 (추가 기능 구현 사항)
// const Review = styled.div`
//   border-top: 10px solid #f8f8f9;
//   border-bottom: 1px solid #e7e7e7;
// `;
