module.exports.getTimeParameter = function(time) {
  function getTimeRange(time) {
    let startDecade = Number(time.substring(0, 4));
    let endDecade = Number(time.substring(0, 4)) + 10;
    return [startDecade, endDecade];
  }

  let timeRange = getTimeRange(time);

  let releaseDates;
  //if time is less than 5 characters long, meaning it doesn't have an 's' at the end and therefore isn't a decade (i.e. 1990s, 2010s) then use just primary release year
  //else use the date range
  time.length < 5
    ? (releaseDates = `primary_release_year=${time}`)
    : (releaseDates = `primary_release_date.gte=${
        timeRange[0]
      }&primary_release_date.lte=${timeRange[1]}`);

  return releaseDates;
};
