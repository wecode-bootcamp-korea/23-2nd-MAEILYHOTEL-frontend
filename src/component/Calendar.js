import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import { useFetch } from '../hooks';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { flexSet, fullScreen } from '../styles/Mixins';

function dateConversion(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${date.getFullYear()}-${month < 10 ? `0` + month : month}-${
    day < 10 ? `0` + day : day
  }`;
}

function calcDateRange(dateRange) {
  let stay = new Date();
  stay =
    (Date.parse(dateRange[1]) - Date.parse(dateRange[0])) /
      (1000 * 60 * 60 * 24) +
    1;

  let startDay =
    dateRange[0] &&
    `${dateRange[0].getFullYear()}-${dateRange[0].getMonth()}-${dateRange[0].getDate()}`;

  let endDay =
    dateRange[1] &&
    `${dateRange[1].getFullYear()}-${dateRange[1].getMonth()}-${dateRange[1].getDate()}`;

  return [startDay, endDay, stay];
}

export const Calendar = ({ setCalendarOn }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [bookInfo, loading, error] = useFetch(
    'http://localhost:3000/data/CALENDAR.json',
    { method: 'GET' }
  );

  const excludeDay = bookInfo => {
    let arr = [];
    for (const date in bookInfo.result) {
      if (bookInfo.result[date].quantity === 0) {
        arr.push(new Date(date));
      }
    }
    return arr;
  };

  const renderDayContents = (day, date) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return (
      <>
        <span title={tooltipText}>{date.getDate()}</span>
        {bookInfo.result ? (
          <span title={tooltipText}>
            {bookInfo.result[dateConversion(date)]
              ? '₩ ' +
                bookInfo.result[dateConversion(date)].price.toLocaleString()
              : null}
          </span>
        ) : null}
      </>
    );
  };
  let bookDisable = excludeDay(bookInfo);

  return (
    <CalendarWrapper>
      <Button onClick={setCalendarOn}>X</Button>
      <StyledDatePicker
        locale={ko}
        dateFormat="yyyy-mm-dd"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={date => {
          setDateRange(date);
        }}
        isClearable={true}
        monthsShown={2}
        renderDayContents={renderDayContents}
        excludeDates={bookDisable}
        minDate={new Date()}
        showDisabledMonthNavigation
        inline
      />
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
`;

const CalendarWrapper = styled.div`
  position: fixed;
  ${fullScreen}
  background-color: white;
  z-index: 100;
  top: 0px;

  > div {
    ${flexSet('center', 'center')}
    width: 100%;
    height: 100vh;

    .react-datepicker {
      ${flexSet('center', 'center', 'column')}
      width: 100%;
      max-width: 1180px;
      border: none;

      > button {
        display: none;
      }

      .react-datepicker__month-container {
        ${flexSet('center', 'center', 'column')}
        width: 100%;
        margin: 0px;

        &:last-child {
          .react-datepicker__header {
            .react-datepicker__day-names {
              display: none;
            }
          }
        }

        .react-datepicker__header {
          ${flexSet('center', 'center', 'column')}
          width: 100%;
          border: none;
          background-color: transparent;

          .react-datepicker__current-month {
            ${flexSet('center', 'center')}
            font-size: 25px;
            margin: 10px 0 30px 0;
          }

          .react-datepicker__day-names {
            ${flexSet('space-around', 'center', 'row')}
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 1px solid lightgray;
            font-size: 20px;

            .react-datepicker__day-name {
              &:first-child {
                color: red;
              }

              &:last-child {
                color: red;
              }
            }
          }
        }

        .react-datepicker__month {
          ${flexSet('center', 'center', 'column')}
          width: 100%;

          .react-datepicker__week {
            ${flexSet('space-around', 'center', 'row')}
            width: 100%;
            font-size: 25px;

            .react-datepicker__day--keyboard-selected {
              background-color: #ff7675;
              color: black;
            }

            .react-datepicker__day--in-selecting-range {
              background-color: transparent;
              color: black;
            }

            .react-datepicker__day--in-range {
              background-color: #ff7675;
              opacity: 0.5;
            }

            .react-datepicker__day--selecting-range-start,
            .react-datepicker__day--range-start,
            .react-datepicker__day--range-end {
              background-color: #ff7675;
              color: black;
              opacity: 1;
            }

            .react-datepicker__day--outside-month {
              background-color: transparent;
            }

            .react-datepicker__day--today {
              border: 1px solid #ff7675;
            }

            .react-datepicker__day--disabled {
              background-color: white;
            }

            .react-datepicker__day {
              ${flexSet('center', 'center', 'column')}
              border-radius: 0px;
              width: 168.5px;
              height: 90px;
              margin: 5px 0;
            }

            .react-datepicker__day--weekend {
              color: red;
            }
          }
        }
      }
    }
  }
`;

const StyledDatePicker = styled(DatePicker)``;
