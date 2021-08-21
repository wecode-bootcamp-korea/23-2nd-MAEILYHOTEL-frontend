import React from 'react';

import styled from 'styled-components';
import { flexSet, fontSet, boxSizeSet, border } from '../../../styles/Mixins';

export const DownloadCoupon = () => {
  return (
    <DownloadCouponButton>
      <div>
        <DownloadCouponMark color="#74B9ff">다운로드 쿠폰</DownloadCouponMark>
        <DownloadCouponText color="#74B9ff">
          최대 5천원 쿠폰 다운받기
        </DownloadCouponText>
      </div>
      <DownloadCouponIcon>
        <i className="fas fa-chevron-right" />
      </DownloadCouponIcon>
    </DownloadCouponButton>
  );
};

const DownloadCouponButton = styled.button`
  ${flexSet('space-between', 'center', 'inherit')};
  ${boxSizeSet('100%', '48px', '20px 0 16px', '8px')};
  ${border('0.5px solid rgb(240, 240, 240)', '2px')};
  background-color: white;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 8px 0px;
  cursor: pointer;
`;

const DownloadCouponMark = styled.span`
  ${boxSizeSet('inherit', 'inherit', '0 0 0 8px', '5px')};
  ${({ color }) => fontSet('12px', color, '500')};
  background-color: rgb(252, 247, 248);
  border-radius: 10px;
  text-align: center;
`;

const DownloadCouponText = styled.span`
  ${({ color }) => fontSet('14px', color, '500')}
  margin-left: 10px;
`;

const DownloadCouponIcon = styled.div`
  margin-right: 20px;
`;
