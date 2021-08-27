import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks';
import { ReviewWrite } from './DetailHotelReview/ReviewWrite';
import { ReviewForm } from './DetailHotelReview/ReviewForm';
import { useRouteMatch } from 'react-router-dom';
import { idMasking } from '../Detail/DetailHotelReview/reviewIdMasking';
import { BOOK_API, DETAIL_PAGE } from '../../config';

import styled from 'styled-components';
import { fullScreen, boxSizeSet, flexSet, fontSet } from '../../styles/Mixins';

export const ReviewModal = ({
  isReviewModalHandle,
  reviewModalActive,
  setIsReviewModalHandle,
  reviews,
  roomListData,
}) => {
  const match = useRouteMatch();
  const [hotelReview, loading] = useFetch(
    `http://10.58.2.242:8000/stays/${match.params.id}/reviews`
  );

  const headers = {
    Authorization: localStorage.getItem('login_token'),
  };

  const [reservationUser] = useFetch(
    `${DETAIL_PAGE}/stays/${match.params.id}/reviewsavailable`,
    {
      method: 'get',
      headers,
    }
  );

  const [bookData, bookLoading] = useFetch(`${BOOK_API}`, { headers });

  const bookRoomNumber =
    bookData.data &&
    Object.entries(bookData.data).map(book => {
      return book[1].room_id;
    });

  const hotelRoomNumber =
    roomListData.data &&
    Object.entries(roomListData.data).map(room => {
      return room[1].id;
    });

  const roomNumber = Array.from(new Set(bookRoomNumber));

  const compareNum = roomNumber.filter(roomNum => {
    for (let i = 0; i < hotelRoomNumber.length - 1; i++) {
      if (hotelRoomNumber[i] === roomNum) {
        return roomNum;
      }
    }
  });

  const reviewRoomId = compareNum[0];

  const reserveCheck =
    reservationUser && reservationUser.is_available && reviewRoomId;

  useEffect(() => {
    if (reserveCheck === true) {
      setIsReviewBoxActive(!isReviewBoxActive);
    }
  }, [reservationUser]);

  const [isReviewBoxActive, setIsReviewBoxActive] = useState(false);

  const topUserId = reviews[0] && idMasking(reviews[0].userId);

  return (
    isReviewModalHandle && (
      <ReviewModalSection>
        <ReviewModalHeader>
          <ReviewExit className="fas fa-times" onClick={reviewModalActive} />
          <ReviewTitle>트루리뷰</ReviewTitle>
        </ReviewModalHeader>
        {reviews[0] === null ? null : (
          <TopReviewWrap>
            <TopTitleReview>대표 트루리뷰</TopTitleReview>
            <TopReviewBox>
              <ReviewForm
                userId={topUserId}
                score={reviews[0].score}
                description={reviews[0].description}
                userImage={reviews[0].image}
              />
            </TopReviewBox>
          </TopReviewWrap>
        )}
        {isReviewBoxActive ? (
          <ReviewWrite
            reviewModalActive={reviewModalActive}
            setIsReviewModalHandle={setIsReviewModalHandle}
            reviewRoomId={reviewRoomId}
          />
        ) : null}
        <section>
          {hotelReview?.data?.map((contents, idx) => {
            return (
              <ReviewForm
                key={idx}
                userId={contents.userId}
                score={contents.score}
                description={contents.description}
                userImage={contents.image}
              />
            );
          })}
        </section>
      </ReviewModalSection>
    )
  );
};

const ReviewModalSection = styled.section`
  ${fullScreen};
  ${boxSizeSet('100%', '100%', 'none', '20px')}
  z-index: 1;
  position: fixed;
  top: 67px;
  max-width: 1180px;
  background-color: white;
  overflow: scroll;
`;

const ReviewModalHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  padding: 0 0 20px;
  border-bottom: 1px solid #e7e7e7;
`;

const ReviewExit = styled.i`
  font-size: 20px;
  cursor: pointer;
`;

const ReviewTitle = styled.span`
  ${flexSet('center', 'center')};
  ${fontSet('18px', 'rgb(77,77,77)', '500')};
  line-height: 1.5;
`;

const TopTitleReview = styled.h2`
  ${fontSet('20px', 'black', '500', '1.33')};
  padding: 10px;
`;

const TopReviewWrap = styled.section`
  margin: 15px 0;
`;

const TopReviewBox = styled.div`
  font-size: 16px;
  padding: 10px 20px;
  background-color: rgba(128, 128, 128, 0.1);
`;
