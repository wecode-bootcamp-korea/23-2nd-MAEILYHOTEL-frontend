import React, { useState } from 'react';
import { useFetch } from '../../hooks';
import { useRouteMatch } from 'react-router-dom';

import { DetailCommon } from '../../component/Detail/DetailCommon';
import { DetailHotelTitle } from './DetailHotelTitle/DetailHotelTitle';
import { DetailHotelRoom } from './DetailHotelRoom/DetailHotelRoom';
import { DetailHotelInfo } from './DetailHotelInfo/DetailHotelInfo';
import { DetailHotelFacility } from './DetailHotelFacility/DetailHotelFacility';
import { DetailHotelMap } from './DetailHotelMap/DetailHotelMap';
import { MapModal } from './MapModal';
import { Calendar } from '../../component/Calendar/Calendar';

import styled from 'styled-components';
import { fullScreen } from '../../styles/Mixins';

import { DETAIL_PAGE } from '../../config';

export const Detail = () => {
  const [isModalHandle, setIsModalHandle] = useState(false);
  const [calendarOn, setCalendarOn] = useState(false);
  const [stayDate, setStayDate] = useState([]);

  const match = useRouteMatch();

  const [hotelData, loading] = useFetch(
    `${DETAIL_PAGE}/stays/${match.params.id}`
  );

  const modalActive = () => {
    setIsModalHandle(!isModalHandle);
  };

  const {
    category,
    name,
    images,
    cost,
    total_rooms,
    facilities,
    address,
    lat,
    long,
    description,
    check_in,
    check_out,
  } = hotelData || {};

  return (
    !loading && (
      <>
        <DetailSection>
          <DetailCommon
            images={images}
            check_in={check_in}
            check_out={check_out}
          >
            <DetailHotelTitle category={category} name={name} cost={cost} />
            {/* <Review>review</Review>     //리뷰 (추가 기능 구현 사항)*/}
            <DetailHotelRoom
              setCalendarOn={() => {
                setCalendarOn(true);
              }}
              stayDate={stayDate}
            />
            <DetailHotelInfo name={name} description={description} />
            <DetailHotelFacility
              total_rooms={total_rooms}
              facilities={facilities}
            />
            <DetailHotelMap modalActive={modalActive} address={address} />
          </DetailCommon>
          <MapModal
            isModalHandle={isModalHandle}
            modalActive={modalActive}
            name={name}
            lat={lat}
            long={long}
          />
        </DetailSection>
        {calendarOn && (
          <Calendar
            setCalendarOff={() => {
              setCalendarOn(false);
            }}
            setStayDate={setStayDate}
            priceDisplay={true}
            excludeOn={true}
            linkButtonText={
              stayDate[1]
                ? `${stayDate[0]} ~ ${stayDate[1]} 예약하기`
                : '날짜를 선택해주세요'
            }
            linkUrl={`/stays/${match.params.id}/rooms?CheckIn=${stayDate[0]}&CheckOut=${stayDate[1]}`}
            redirectComponent={`/stays/${match.params.id}/rooms?CheckIn=${stayDate[0]}&CheckOut=${stayDate[1]}`}
          />
        )}
      </>
    )
  );
};

const DetailSection = styled.section`
  ${fullScreen};
  display: flex;
  justify-content: center;
`;
