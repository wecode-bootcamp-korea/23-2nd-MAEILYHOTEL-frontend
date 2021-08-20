import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { flexSet, fullScreen } from '../../styles/Mixins';

export const CalendarWrapper = styled.div`
  position: fixed;
  ${fullScreen}
  background-color: white;
  top: 0px;
  z-index: 99;

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
        /* height: 30vh; */
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
                color: ${({ theme }) => theme.colors.blue};
              }

              &:last-child {
                color: ${({ theme }) => theme.colors.blue};
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
              background-color: ${({ theme }) => theme.colors.blue};
              color: black;
            }

            .react-datepicker__day--in-selecting-range {
              background-color: transparent;
              color: black;
            }

            .react-datepicker__day--in-range {
              background-color: ${({ theme }) => theme.colors.blue};

              opacity: 0.5;
            }

            .react-datepicker__day--selecting-range-start,
            .react-datepicker__day--range-start,
            .react-datepicker__day--range-end {
              background-color: ${({ theme }) => theme.colors.blue};

              color: black;
              opacity: 1;
            }

            .react-datepicker__day--outside-month {
              background-color: transparent;
            }

            .react-datepicker__day--today {
              border: 1px solid ${({ theme }) => theme.colors.blue};
            }

            .react-datepicker__day--disabled {
              background-color: white;
            }

            .react-datepicker__day {
              ${flexSet('center', 'center', 'column')}
              border-radius: 0px;
              width: 168.5px;
              height: 75px;
              margin: 5px 0;
            }

            .react-datepicker__day--weekend {
              color: ${({ theme }) => theme.colors.blue};
            }
          }
        }
      }
    }
  }
`;
