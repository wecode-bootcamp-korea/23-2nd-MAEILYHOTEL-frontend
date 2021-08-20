import React, { useState } from 'react';
import { LOGIN_TOKEN } from '../../hooks';
import { GRADE } from '../../config';

import styled from 'styled-components';

export const NavModal = ({ handleModal, userInfo }) => {
  const token = localStorage.getItem(LOGIN_TOKEN);

  const { name, userlevel, agreement, point } = userInfo;

  const [toggle, settoggle] = useState(agreement);
  const [grade, setgrade] = useState(userlevel);

  const onOff = () => {
    settoggle(!toggle);
    gradeRequest();
  };

  const gradeRequest = () => {
    fetch(`${GRADE}`, {
      method: 'PATCH',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        agreement: !toggle,
        userlevel: toggle ? 'silver' : 'gold',
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.agreement) {
          setgrade(res.userlevel);
        } else {
          setgrade(res.userlevel);
        }
      });
  };

  return (
    userInfo && (
      <Modal>
        <Name>
          {name ? `${name}님` : '로그인 해주세요.'}
          {grade && <Grade>{grade === 'silver' ? 'SILVER' : 'GOLD'}</Grade>}
          <br />
          {point && (
            <Point>잔여 포인트 : ₩ {Math.floor(point).toLocaleString()}</Point>
          )}
          <Xmark>
            <i className="fas fa-times" onClick={handleModal}></i>
          </Xmark>
          <Button>내 정보 수정</Button>
          <Icon>
            <i className="far fa-handshake">약관동의</i>
            {name && <Toggle onClick={onOff}>{toggle ? 'OFF' : 'ON'}</Toggle>}
            <i className="far fa-file-alt">예약 / 구매내역</i>
            <i className="far fa-heart">위시리스트</i>
            <i className="far fa-user">마이매일리</i>
          </Icon>
        </Name>
      </Modal>
    )
  );
};

const Modal = styled.div`
  z-index: 100;
  position: fixed;
  top: -1px;
  right: 165px;
  width: 322px;

  background-color: white;
  border: 1px solid rgb(231, 231, 231);
`;

const Name = styled.div`
  font-size: 18px;
  margin-top: 15px;
  margin-left: 15px;
  letter-spacing: 3px;
`;

const Xmark = styled.div`
  position: relative;
  left: 280px;
  bottom: 20px;
  margin: 0px;
  color: ${props => props.theme.colors.gray_3};
`;

const Grade = styled.span`
  margin-left: 20px;
  font-size: 12px;
  padding: 5px;
  border: 1px solid black;
`;

const Button = styled.button`
  background-color: rgb(219, 7, 74);
  cursor: pointer;
  border: none;
  color: white;
  width: 280px;
  height: 30px;
`;

const Icon = styled.div`
  i {
    color: black;
    margin-bottom: 10px;
    display: block;
    margin: 22px 0px;
    font-size: 15px;
  }
`;

const Toggle = styled.button`
  position: absolute;
  bottom: 128px;
  left: 240px;
  width: 43px;
`;

const Point = styled.p`
  margin-top: 10px;
`;
