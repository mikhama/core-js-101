/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date     *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
 */
function parseDataFromRfc2822(value) {
  // throw new Error('Not implemented');
  return new Date(value);
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => Date()
 *    '2016-01-19T08:07:37Z' => Date()
 */
function parseDataFromIso8601(value) {
  // throw new Error('Not implemented');
  return new Date(value);
}


/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
function isLeapYear(date) {
  // throw new Error('Not implemented');
  const year = new Date(date).getUTCFullYear();
  return +year % 4 === 0 && +year !== 1900;
}
/**
 * Returns the string representation of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */
function timeSpanToString(startDate, endDate) {
  // throw new Error('Not implemented');
  const pars = endDate - startDate;
  const dat = new Date(pars);
  let hour = dat.getUTCHours();
  let min = dat.getUTCMinutes();
  let sek = dat.getUTCSeconds();
  let milsek = dat.getUTCMilliseconds();
  // eslint-disable-next-line no-unused-expressions
  hour < 10 ? hour = `0${hour}` : hour;
  // eslint-disable-next-line no-unused-expressions
  min < 10 ? min = `0${min}` : min;
  // eslint-disable-next-line no-unused-expressions
  sek < 10 ? sek = `0${sek}` : sek;
  // eslint-disable-next-line no-unused-expressions
  milsek.toString().length !== 3 ? milsek = `00${milsek}` : milsek;
  return `${hour}:${min}:${sek}.${milsek}`;
}
/**
 * Returns the angle (in radians) between the hands of an analog clock
 * for the specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 *
 * SMALL TIP: convert to radians just once, before return in order to not lost precision
 *
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(date) {
  // throw new Error('Not implemented');
  const dat = new Date(date);
  let hour = +dat.getUTCHours();
  const min = dat.getUTCMinutes();
  if (hour === min) return 0;
  if (hour === 3 || Math.abs(hour - 12) === 3 || hour === 21) return Math.PI / 2;
  if (hour === 6 || (hour - 12) === 6) return Math.PI;
  if (hour >= 12) {
    hour -= 12;
  }
  const wayHourInOneMin = 1 / 12;
  const oneGrad = Math.PI / 180;
  const watchOneHourPositionInGrad = 30;
  const wathOneMinPositionInGrad = 6;
  const minInGrad = min * wathOneMinPositionInGrad;
  const hourInGrad = hour * watchOneHourPositionInGrad;
  const difference = wayHourInOneMin * min;
  const res = minInGrad - hourInGrad - (difference * wathOneMinPositionInGrad);
  return Math.abs(res * oneGrad);
}


module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
