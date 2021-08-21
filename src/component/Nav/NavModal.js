import React, { useState } from 'react';
import { USER_INFO } from '../../pages/Redirect/Redirect';
import { GRADE } from '../../config';
import styled from 'styled-components';

export const NavModal = ({ handleModal }) => {
  const [toggle, settoggle] = useState(false);
  const [grade, setgrade] = useState('SILVER');

  const userInfo = JSON.parse(localStorage.getItem(USER_INFO));

  const onOff = () => {
    settoggle(!toggle);
    gradeRequest();
  };

  const gradeRequest = () => {
    fetch(`${GRADE}`, {
      method: 'PATCH',
      headers: {
        Authorization: userInfo.token,
      },
      body: JSON.stringify({
        agreement: toggle ? 'False' : 'True',
        userlevel: toggle ? 1 : 2,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.id === 2) {
          setgrade('GOLD');
        } else if (res.id === 1) {
          setgrade('SILVER');
        }
      });
  };

  return (
    <Modal>
      <Name>
        {userInfo ? `${userInfo.name}님` : '로그인 해주세요.'}
        {userInfo && grade && <Grade>{grade}</Grade>}
        <br />
        <Xmark>
          <i className="fas fa-times" onClick={handleModal}></i>
        </Xmark>
        <Button>내 정보 수정</Button>
        <Icon>
          <i className="far fa-handshake">약관동의</i>
          <Toggle onClick={onOff}>{toggle ? 'ON' : 'OFF'}</Toggle>
          <i className="far fa-file-alt">예약 / 구매내역</i>
          <i className="far fa-heart">위시리스트</i>
          <i className="far fa-user">마이매일리</i>
        </Icon>
      </Name>
    </Modal>
  );
};

const Modal = styled.div`
  z-index: 9999;
  position: fixed;
  top: -1px;
  right: 165px;
  width: 322px;
  height: 250px;

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

const Icon = styled.div`
  i {
    color: black;
    margin-bottom: 10px;
    display: block;
    margin: 22px 0px;
    font-size: 15px;
  }
`;

const Button = styled.button`
  background-color: rgb(219, 7, 74);
  cursor: pointer;
  border: none;
  color: white;
  width: 280px;
  height: 30px;
`;

const Toggle = styled.button`
  position: absolute;
  bottom: 128px;
  left: 240px;
  width: 43px;
`;

const Grade = styled.span`
  margin-left: 20px;
  font-size: 12px;
  padding: 5px;
  border: 1px solid black;
`;
