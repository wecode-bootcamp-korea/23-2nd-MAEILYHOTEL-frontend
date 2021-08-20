import React, { useState } from 'react';
import { useFetch } from '../../hooks';
// import { DETAIL_PAGE } from '../../config';              // 실제 사용 코드
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

export const Detail = () => {
  const [isModalHandle, setIsModalHandle] = useState(false);
  const [hotelData, loading] = useFetch('/data/HOTEL_DATA.json');
  // const [hotelData, loading] = useFetch(`${DETAIL_PAGE}/3`); // 실제 사용 코드
  const [calendarOn, setCalendarOn] = useState(false);

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
  } = hotelData[0] || {};

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
            lng={long}
          />
        </DetailSection>
        {calendarOn && (
          <Calendar
            setCalendarOff={() => {
              setCalendarOn(false);
            }}
            priceDisplay={true}
            excludeOn={true}
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
