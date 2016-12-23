// var moment = require('moment');
var dates = [
//   {
    //     title: "Spring",
    //     timestamp: [2015, 3, 20, 15, 45, 8, 574]
    // }, {
    //     title: "Summer",
    //     timestamp: [2015, 6, 21, 9, 37, 55, 37]
    // }, {
    //     title: "Autumn",
    //     timestamp: [2015, 9, 23, 1, 20, 31, 812]
    // }, {
    //     title: "Winter",
    //     timestamp: [2015, 12, 21, 20, 47, 56, 83]
    // },
    //
    // {
    //     title: "Spring",
    //     timestamp: [2016, 3, 19, 21, 30, 10, 630]
    // }, {
    //     title: "Summer",
    //     timestamp: [2016, 6, 20, 15, 34, 10, 430]
    // }, {
    //     title: "Autumn",
    //     timestamp: [2016, 9, 22, 7, 21, 6, 507]
    // },
     {
        title: "Winter",
        timestamp: [2016, 12, 21, 2, 44, 9, 851]
    },

    {
        title: "Spring",
        timestamp: [2017, 3, 20, 3, 28, 37, 4]
    }, {
        title: "Summer",
        timestamp: [2017, 6, 20, 21, 24, 7, 853]
    }, {
        title: "Autumn",
        timestamp: [2017, 9, 22, 13, 1, 45, 345]
    }, {
        title: "Winter",
        timestamp: [2017, 12, 21, 8, 27, 54, 306]
    },

    {
        title: "Spring",
        timestamp: [2018, 3, 20, 9, 15, 24, 776]
    }, {
        title: "Summer",
        timestamp: [2018, 6, 21, 3, 7, 15, 146]
    }, {
        title: "Autumn",
        timestamp: [2018, 9, 22, 18, 54, 2, 859]
    }, {
        title: "Winter",
        timestamp: [2018, 12, 21, 14, 22, 41, 440]
    },

    {
        title: "Spring",
        timestamp: [2019, 3, 20, 14, 58, 23, 166]
    }, {
        title: "Summer",
        timestamp: [2019, 6, 21, 8, 54, 11, 851]
    }, {
        title: "Autumn",
        timestamp: [2019, 9, 23, 12, 50, 6, 775]
    }, {
        title: "Winter",
        timestamp: [2019, 12, 21, 20, 19, 22, 446]
    },

    {
        title: "Spring",
        timestamp: [2020, 3, 19, 20, 49, 33, 410]
    }, {
        title: "Summer",
        timestamp: [2020, 6, 20, 14, 43, 36, 747]
    }, {
        title: "Autumn",
        timestamp: [2020, 9, 22, 6, 30, 34, 987]
    }, {
        title: "Winter",
        timestamp: [2020, 12, 21, 2, 2, 16, 268]
    },

    {
        title: "Spring",
        timestamp: [2021, 3, 20, 2, 37, 24, 294]
    }, {
        title: "Summer",
        timestamp: [2021, 6, 20, 20, 32, 5, 495]
    }, {
        title: "Autumn",
        timestamp: [2021, 9, 22, 12, 21, 0, 855]
    }, {
        title: "Winter",
        timestamp: [2021, 12, 21, 7, 59, 13, 863]
    },

    {
        title: "Spring",
        timestamp: [2022, 3, 20, 8, 33, 20, 419]
    }, {
        title: "Summer",
        timestamp: [2022, 6, 21, 2, 13, 46, 75]
    }, {
        title: "Autumn",
        timestamp: [2022, 9, 22, 18, 3, 36, 646]
    }, {
        title: "Winter",
        timestamp: [2022, 12, 21, 13, 48, 7, 546]
    },

    {
        title: "Spring",
        timestamp: [2023, 3, 20, 14, 24, 20, 932]
    }, {
        title: "Summer",
        timestamp: [2023, 6, 21, 7, 57, 43, 963]
    }, {
        title: "Autumn",
        timestamp: [2023, 9, 22, 23, 49, 53, 546]
    }, {
        title: "Winter",
        timestamp: [2023, 12, 21, 19, 27, 16, 131]
    },

    {
        title: "Spring",
        timestamp: [2024, 3, 19, 20, 6, 18, 269]
    }, {
        title: "Summer",
        timestamp: [2024, 6, 20, 13, 50, 53, 786]
    }, {
        title: "Autumn",
        timestamp: [2024, 9, 22, 5, 43, 33, 103]
    }, {
        title: "Winter",
        timestamp: [2024, 12, 21, 1, 20, 27, 746]
    },

    {
        title: "Spring",
        timestamp: [2025, 3, 20, 2, 1, 22, 434]
    }, {
        title: "Summer",
        timestamp: [2025, 6, 20, 19, 42, 8, 658]
    }, {
        title: "Autumn",
        timestamp: [2025, 9, 22, 11, 19, 13, 99]
    }, {
        title: "Winter",
        timestamp: [2025, 12, 21, 7, 2, 57, 795]
    }
];

$(function() {
    var intervals = [2, 4, 8, 16];

    // populate drop-down
    $('.divisions').append('<option value="0">-</option>')
    intervals.forEach(function(interval) {
        $('.divisions').append('<option value="' + interval + '">' + interval + '</option>')
    })

    $('.divisions').on('change', function() {
        var divisions = parseInt($('.divisions').val(), 10);
        $('.result').text('');
        $('.result').append('<div>Times adjusted for Pacific time zone:</div><br>');
        appendDivisions(divisions);
    })
});

function appendDivisions(divisions) {
    var answer = datePairs(dates).map((pair) => {
        return {
            season: pair[0].title + ' ' + pair[0].timestamp[0],
            segments: revealBetween(pair[0], pair[1]).map((segment) => {
                return '' + segment.segmentTitle + segment.segmentTime;
            })
        }
    });

    answer.forEach((period) => {
        $('.result').append(period.season);
        $('.result').append('<br>');
        period.segments.forEach((segment) => {

            $('.result').append(segment)
            $('.result').append('<br>')
        })
        $('.result').append('<br>');
    })
}

function getDivisions() {
    return parseInt($('.divisions').val(), 10);
}

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
    return moment(a).format('MM-DD-YYYY HH:mm:ss.SSS ZZ')
}

function quartersBetween(season1, season2) {
    var d1 = makeDate(season1.timestamp);
    var d2 = makeDate(season2.timestamp);
    var result = [];
    var divisions = getDivisions();
    var difference = ((+d2 - +d1) / divisions);

    for (var i = 0; i < divisions; i++) {
        result.push({
            segmentTitle: season1.title + ' + ' + i + '/' + (divisions * 4) + '. Date: ',
            segmentTime: +d1 + (i * difference)
        });
    }
    return result;
}
