module.exports.setDateParameters = function(lowerLimit, upperLimit) {
  let beginDate = new Date();
  beginDate.setDate(beginDate.getDate() - lowerLimit);

  let endDate = new Date();
  endDate.setDate(endDate.getDate() + upperLimit);

  function getYearMonthDay(dateObj) {
    const year = dateObj.getUTCFullYear();
    let month = String(dateObj.getMonth() + 1);
    let day = String(dateObj.getUTCDate());

    if (month < 10) {
      month = 0 + month;
    }

    if (day < 10) {
      day = 0 + day;
    }

    return `${year}-${month}-${day}`;
  }

  endDate = getYearMonthDay(endDate);
  beginDate = getYearMonthDay(beginDate);

  return [beginDate, endDate];
};
