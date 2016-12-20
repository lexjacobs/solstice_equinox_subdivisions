var moment = require('moment');
var dates = [{
    title: 'winter 2016',
    timestamp: [2016, 12, 21, 3, 44, 9, 851]
}, {
    title: 'spring 2017',
    timestamp: [2017, 3, 20, 3, 28, 37, 4]
}, {
    title: 'summer 2017',
    timestamp: [2017, 6, 20, 21, 24, 7, 853]
}, {
    title: 'autumn 2017',
    timestamp: [2017, 9, 22, 13, 1, 45, 345]
}, {
    title: 'winter 2017',
    timestamp: [2017, 12, 21, 8, 27, 54, 306]
}, {
    title: 'spring 2018',
    timestamp: [2018, 3, 20, 9, 15, 24, 776]
}, {
  title: 'summer 2018',
  timestamp: [2018, 6, 21, 3, 7, 15, 146]
}, {
  title: 'autumn 2018',
  timestamp: [2018, 9, 22, 18, 54, 2, 859]
}, {
  title: 'winter 2018',
  timestamp: [2018, 12, 21, 14, 22, 41, 440]
}, {
  title: 'spring 2019',
  timestamp: [2019, 3, 20, 14, 58, 23, 166]
}];

console.log(datePairs(dates).map((pair) => {
    return {
        season: pair[0].title,
        segments: revealBetween(pair[0], pair[1]).map((segment) => {
            return '' + segment.segmentTitle + segment.segmentTime;
        })
    }
}));

function datePairs(dates) {
    var result = [];
    for (var i = 0; i < dates.length - 1; i++) {
        result.push([dates[i], dates[i + 1]])
    }
    return result;
}

function revealBetween(season1, season2) {
    return quartersBetween(season1, season2).map((segment) => {
        return {
            segmentTitle: segment.segmentTitle,
            segmentTime: makeMoment(segment.segmentTime)
        }
    })
}

function makeDate(a) {
    // months are 0 indexed
    var result = a.slice()
    result[1]--
        return new Date(...result)
}

function makeMoment(a) {
    // months are 0 indexed
    return moment(a).format('YYYY-MM-DD HH:mm:ss.SSS ZZ')
}

function quartersBetween(season1, season2) {
    var d1 = makeDate(season1.timestamp);
    var d2 = makeDate(season2.timestamp);
    var result = [];
    var difference = ((+d2 - +d1) / 4);

    var designation = {
        0: 'SEASON',
        1: '16TH',
        2: 'HALF',
        3: '16TH'
    }

    for (var i = 0; i < 4; i++) {
        result.push({
            segmentTitle: season1.title + ' + ' + i + '/16ths. ' + designation[i] + ' ',
            segmentTime: +d1 + (i * difference)
        });
    }
    return result;
}
