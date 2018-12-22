// const _ = require('lodash');
const moment = require('moment-timezone');

const START = 1970;
const END = 2070;

/* json object keyed by year with
keys of spring/summer/autumn/winter  
and values like "1970-03-21 00:56:18:602"
 */
const utcDates = require('../data/solstice_equinox_1970_2070_UTC.json');

// map seasons to integer
var seasonMap = {
  0: 'spring',
  1: 'summer',
  2: 'autumn',
  3: 'winter'
};

function spreadSeasonalObjectsIntoArray(allDates, start, end) {
  // create result array
  var result = [];
  // from start (1970) -> end (2070)
  for (var i = start; i <= end; i++) {
    // add every seasonal time, tagged appropriately
    for (var j = 0; j < Object.keys(seasonMap).length; j++) {
      let season = allDates[i][seasonMap[j]];
      result.push({
        timestamp: season,
        year: i,
        season: seasonMap[j]
      });
    }
  }
  return result;
}

function calculateDivision64(n) {
  var result = {
    '64': true
  };
  if (n % 32 === 0) {
    result['2'] = true;
  }
  if (n % 16 === 0) {
    result['4'] = true;
  }
  if (n % 8 === 0) {
    result['8'] = true;
  }
  if (n % 4 === 0) {
    result['16'] = true;
  }
  if (n % 2 === 0) {
    result['32'] = true;
  }
  if (n === 0) {
    result['1'] = true;
  }

  return result;
}

/* 
	dividedData ends up looking like this
	{ "division": { "2": true, "4": true, "8": true, "16": true, "32": true, "64": true, "exactSeason": true }, "year": 1970, "season": "spring", "timestamp": "Mar 20 1970 16:56:18:602 -08:00" }
	{ "division": { "64": true }, "year": 1970, "season": "spring", "timestamp": "Mar 22 1970 03:43:54:532 -08:00" }
	{ "division": { "32": true, "64": true }, "year": 1970, "season": "spring", "timestamp": "Mar 23 1970 14:31:30:462 -08:00" }
	{ "division": { "64": true }, "year": 1970, "season": "spring", "timestamp": "Mar 25 1970 01:19:06:392 -08:00" }
	{ "division": { "16": true, "32": true, "64": true }, "year": 1970, "season": "spring", "timestamp": "Mar 26 1970 12:06:42:322 -08:00" }
	{ "division": { "64": true }, "year": 1970, "season": "spring", "timestamp": "Mar 27 1970 22:54:18:252 -08:00" }
	{ "division": { "32": true, "64": true }, "year": 1970, "season": "spring", "timestamp": "Mar 29 1970 09:41:54:182 -08:00" }
*/

function divideData(seasonsArray) {
  var result = [];
  for (var i = 0; i < seasonsArray.length - 1; i++) {
    // grab seasonal pair objects (i <--> i+1)
    var season1 = seasonsArray[i];
    var season2 = seasonsArray[i + 1];

    // define seasonal pair ms start / end
    // TODO: make a moment.tz object for later parsing into different time zones
    var start = moment.utc(season1.timestamp).valueOf();
    var end = moment.utc(season2.timestamp).valueOf();

    // define 64th of distance between start and end
    var chunk = (end - start) / 64;

    // push 64ths between pairs into buckets, inclusive of start / exclusive of end
    for (let i = 0; i < 64; i++) {
      result.push({
        division: calculateDivision64(i),
        year: season1.year,
        season: season1.season,
        timestamp: start + i * chunk
      });
    }
  }
  return result;
}

// console.timeEnd();
const spreadData = spreadSeasonalObjectsIntoArray(utcDates, START, END);
const dividedData = divideData(spreadData);
export const data = dividedData;
