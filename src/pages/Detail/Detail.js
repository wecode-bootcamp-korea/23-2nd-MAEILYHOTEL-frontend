import React, { useState } from 'react';
import { useFetch } from '../../hooks';
import { useRouteMatch, useLocation } from 'react-router-dom';
import { DETAIL_PAGE } from '../../config';
import { DetailCommon } from '../../component/Detail/DetailCommon';
import { DetailHotelTitle } from './DetailHotelTitle/DetailHotelTitle';
import { DetailHotelReview } from './DetailHotelReview/DetailHotelReview';
import { DetailHotelRoom } from './DetailHotelRoom/DetailHotelRoom';
import { DetailHotelInfo } from './DetailHotelInfo/DetailHotelInfo';
import { DetailHotelFacility } from './DetailHotelFacility/DetailHotelFacility';
import { DetailHotelMap } from './DetailHotelMap/DetailHotelMap';
import { MapModal } from './MapModal';
import { ReviewModal } from './ReviewModal';
import { Calendar } from '../../component/Calendar/Calendar';

import styled from 'styled-components';
import { fullScreen } from '../../styles/Mixins';

export const Detail = () => {
  const [isMapModalHandle, setIsMapModalHandle] = useState(false);
  const [isReviewModalHandle, setIsReviewModalHandle] = useState(false);
  const [calendarOn, setCalendarOn] = useState(false);
  const [stayDate, setStayDate] = useState([]);

  const match = useRouteMatch();
  const location = useLocation();
  let [path, query] = `/list${location.search}`.split('?');
  const [checkIn, checkOut] = query.split('&');

  const [hotelData, loading] = useFetch(
    `${DETAIL_PAGE}/stays/${match.params.id}?${checkIn}&${checkOut}`
  );

  const mapModalActive = () => {
    setIsMapModalHandle(!isMapModalHandle);
  };

  const reviewModalActive = () => {
    setIsReviewModalHandle(!isReviewModalHandle);
  };

  const {
    address,
    category,
    check_in,
    check_out,
    description,
    facilities,
    images,
    lat,
    long,
    name,
    reviews,
    total_rooms,
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
            <DetailHotelTitle category={category} name={name} />
            <DetailHotelReview
              reviewModalActive={reviewModalActive}
              reviews={reviews}
            />
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
            <DetailHotelMap mapModalActive={mapModalActive} address={address} />
          </DetailCommon>
          <MapModal
            isMapModalHandle={isMapModalHandle}
            mapModalActive={mapModalActive}
            name={name}
            lat={lat}
            long={long}
          />
          <ReviewModal
            isReviewModalHandle={isReviewModalHandle}
            reviewModalActive={reviewModalActive}
            setIsReviewModalHandle={setIsReviewModalHandle}
            reviews={reviews}
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
  margin-top: 60px;
`;
