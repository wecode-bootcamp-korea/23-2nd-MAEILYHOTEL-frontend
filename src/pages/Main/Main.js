import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MainWrapper } from './MainSearch/MainWrapper';
import { Calendar } from '../../component/Calendar/Calendar';
import { LocationModal } from './LocationModal/LocationModal';

import styled from 'styled-components';
import { flexSet, fullScreen } from '../../styles/Mixins';

export const Main = () => {
  const [calendarOn, setCalendarOn] = useState(false);
  const [locationModalOn, setLocationModalOn] = useState(false);
  const [stayLocation, setStayLocation] = useState('');
  const [stayDate, setStayDate] = useState([]);

  const history = useHistory();

  return (
    <Section>
      <MainWrapper
        setCalendarOn={() => {
          setCalendarOn(true);
        }}
        setLocationModalOn={() => {
          setLocationModalOn(true);
        }}
        stayLocation={stayLocation}
        stayDate={stayDate}
      />
      {locationModalOn && (
        <LocationModal
          setLocationModalOff={() => {
            setLocationModalOn(false);
          }}
          stayDate={stayDate}
          setStayLocation={setStayLocation}
          titleText="여행지를 선택해주세요"
          linkUrl="/stay"
        />
      )}
      {calendarOn && (
        <Calendar
          setCalendarOff={() => {
            setCalendarOn(false);
          }}
          priceDisplay={false}
          excludeOn={false}
          stayLocation={stayLocation}
          setStayDate={setStayDate}
          linkButtonText={
            stayDate[1]
              ? `${stayDate[0]} ~ ${stayDate[1]} 예약하기`
              : '날짜를 선택해주세요'
          }
          linkUrl="/stay"
          redirectComponent="/"
        />
      )}
    </Section>
  );
};

const Section = styled.section`
  ${flexSet('center', 'center')}
  ${fullScreen}
`;
