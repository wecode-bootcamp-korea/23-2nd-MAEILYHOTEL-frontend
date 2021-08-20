export function dateConversion(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${date.getFullYear()}-${month < 10 ? `0` + month : month}-${
    day < 10 ? `0` + day : day
  }`;
}

export function calcDateRange(dateRange) {
  let stay = new Date();
  stay =
    (Date.parse(dateRange[1]) - Date.parse(dateRange[0])) /
      (1000 * 60 * 60 * 24) +
    1;

  let startDay =
    dateRange[0] &&
    `${dateRange[0].getFullYear()}-${
      dateRange[0].getMonth() + 1
    }-${dateRange[0].getDate()}`;

  let endDay =
    dateRange[1] &&
    `${dateRange[1].getFullYear()}-${
      dateRange[1].getMonth() + 1
    }-${dateRange[1].getDate()}`;

  return [startDay, endDay, stay];
}
