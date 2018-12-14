const _ = require('lodash');
const moment = require('moment');
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

/* subdivide by 64ths by unix ms timestamp and push into buckets by year and season 
"1970": {
    "spring": "1970-03-21 00:56:18:602",
    "springBucket": [12343, 23123, 43214 ...],
    "summer": "1970-06-21 19:42:38:132",
    "summerBucket": [12343, 23123, 43214 ...],
    "autumn": "1970-09-23 10:58:56:790",
    "autumnBucket": [12343, 23123, 43214 ...],
    "winter": "1970-12-22 06:35:39:229",
    "winterBucket": [12343, 23123, 43214 ...]
  },
   */

_.forEach(utcDates, (seasons, year) => {
	// add season buckets
	for (let s in seasonMap) {
		utcDates[year][`${seasonMap[s]}Bucket`] = [];
	}

	// iterate from `var i = 0-3` to make pairs of 2 seasons (break on the last loop)
	for (let i = 0; i < 4; i++) {
		// grab seasonal pairs (i <--> i+1)
		var season1 = seasons[seasonMap[i]];
		var season2 = seasons[seasonMap[i + 1]];
		// define ms start / end
		var start = moment(season1).valueOf();
		var end = moment(season2).valueOf();

		// define 64th of distance between start and end
		var chunk = (end - start) / 64;

		// push 64ths between pairs into buckets, inclusive of start / exclusive of end
		let currentBucket = utcDates[year][`${seasonMap[i]}Bucket`];
		for (let i = 0; i < 64; i++) {
			currentBucket.push(moment(start + i * chunk).format('MMM DD YYYY HH:mm:ss:SSS Z'));
		}
	}
});

export const data = utcDates[2018];
