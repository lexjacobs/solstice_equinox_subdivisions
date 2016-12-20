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
}];

// console.log(datePairs(dates));
console.log(datePairs(dates).map((pair) => {
  return revealBetween(pair[0].timestamp, pair[1].timestamp)
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
        return makeMoment(segment);
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
    return moment(a).format('YYYY-MM-DD a hh:mm:ss.SSS ZZ')
}

function quartersBetween(d1, d2) {
    d1 = makeDate(d1);
    d2 = makeDate(d2);
    var result = [];
    var difference = ((+d2 - +d1) / 4);
    for (var i = 0; i < 4; i++) {
        result.push(+d1 + (i * difference));
    }
    return result;
}
