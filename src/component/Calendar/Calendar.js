import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import { CalendarWrapper } from './CalendarWrapper';
import { NextLink } from './NextLink';

import { useFetch } from '../../hooks';
import { calcDateRange, dateConversion } from './CalendarLogic';
import { DETAIL_PAGE } from '../../config';

import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { flexSet } from '../../styles/Mixins';
import { conditionalExpression } from '@babel/types';

export const Calendar = ({
  priceDisplay,
  excludeOn,
  setCalendarOff,
  stayLocation,
  linkButtonText,
  linkUrl,
  redirectComponent,
  setStayDate,
}) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [excludeDays, setExcludeDays] = useState([]);

  const location = useLocation();

  const [, commonPath, id] = location.pathname.split('/');

  const [bookInfo, loading] = useFetch(
    `${DETAIL_PAGE}/${commonPath}/${id}/calendar?Date=${dateConversion(
      new Date()
    )}`
  );

  const excludeDay = bookInfo => {
    const dates = Object.entries(bookInfo.result);
    const quantityZero = dates.filter(dayInfo => dayInfo[1].quantity <= 0);
    const excludeDays = quantityZero.map(day => {
      return new Date(day[0]);
    });
    setExcludeDays(excludeDays);
  };

  const renderDayContents = (day, date = {}) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return (
      <>
        <span title={tooltipText}>{date.getDate()}</span>
        {bookInfo.result && (
          <span title={tooltipText}>
            {bookInfo.result[dateConversion(date)] &&
              '₩ ' +
                bookInfo.result[dateConversion(date)].price.toLocaleString()}
          </span>
        )}
      </>
    );
  };

  useEffect(() => {
    if (!loading && bookInfo.result) {
      excludeDay(bookInfo);
    }
  }, [loading]);

  return (
    <CalendarWrapper>
      <Button onClick={setCalendarOff}>X</Button>
      <StyledDatePicker
        locale={ko}
        dateFormat="yyyy-mm-dd"
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={date => {
          setDateRange(date);
          setStayDate && setStayDate(calcDateRange(date));
          !loading && bookInfo.result && excludeDay(bookInfo);
        }}
        isClearable
        monthsShown={2}
        renderDayContents={priceDisplay && renderDayContents}
        excludeDates={excludeOn && excludeDays}
        minDate={new Date()}
        showDisabledMonthNavigation
        inline
      />
      {linkUrl && linkButtonText && (
        <NextLink
          linkInfo={{
            stayLocation,
            linkUrl,
            linkButtonText,
            redirectComponent,
          }}
          dateRange={dateRange}
          setCalendarOff={setCalendarOff}
          setStayDate={setStayDate}
        />
      )}
    </CalendarWrapper>
  );
};

const Button = styled.button`
  ${flexSet('center', 'center')}
  position: absolute;
  top: 50px;
  left: calc((100vw - (100vw - 100%) - 1180px) / 2);
  width: 60px;
  height: 60px;
  border: none;
  background-color: white;
  font-size: 30px;
  color: gray;
  outline: none;
  z-index: 100;
`;

const StyledDatePicker = styled(DatePicker)``;
