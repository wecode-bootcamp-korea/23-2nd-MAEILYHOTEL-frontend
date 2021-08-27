import React, { useState } from 'react';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import { DETAIL_PAGE } from '../../../config';

import styled from 'styled-components';

export const ReviewWrite = ({
  setIsReviewModalHandle,
  reviewModalActive,
  reviewRoomId,
}) => {
  const [reviewText, setReviewText] = useState('');
  const [imgBase64, setImgBase64] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const uploadReview = e => {
    setReviewText(e.target.value);
  };

  const handleChangeFile = event => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      setImgFile(event.target.files[0]);
    }
  };

  const handelFileUpload = () => {
    const formData = new FormData();
    formData.append('room_id', `${reviewRoomId}`);
    formData.append('rating', 5);
    formData.append('comment', reviewText);
    formData.append('image', imgFile);

    fetch(`${DETAIL_PAGE}/stays/${match.params.id}/reviews`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('login_token'),
      },
      body: formData,
    })
      .then(res => res.json())
      .catch(error => console.log('error', error))
      .then(res => {
        alert('소중한 리뷰 감사합니다');
        history.push(`/detail/${match.params.id}?${location.search}`);
        setIsReviewModalHandle(!reviewModalActive);
      });
  };

  return (
    <ReviewWriteWrap>
      <ReviewBoxWrap>
        <ReviewBox
          onChange={uploadReview}
          placeholder="솔직한 리뷰를 남겨주세요"
        />
        {imgBase64 ? <ImgPrevBox src={imgBase64} alt="" /> : <ImgPrevBox />}
      </ReviewBoxWrap>
      <UploadBox>
        <FileUpload
          className="reviewImg"
          type="file"
          onChange={handleChangeFile}
        />
        <ReviewUploadBtn onClick={handelFileUpload}>등록</ReviewUploadBtn>
      </UploadBox>
    </ReviewWriteWrap>
  );
};

const ReviewWriteWrap = styled.div`
  margin: 20px 0;
`;

const ReviewBoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReviewBox = styled.textarea`
  width: 85%;
  height: 100px;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid gray;
  outline: none;
  resize: none;
`;

const ImgPrevBox = styled.img`
  width: 100px;
  height: 100px;
  background-color: rgba(128, 128, 128, 0.3);
  margin-right: 20px;
`;

const UploadBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FileUpload = styled.input`
  display: inline;
`;

const ReviewUploadBtn = styled.button`
  margin-right: 20px;
`;
