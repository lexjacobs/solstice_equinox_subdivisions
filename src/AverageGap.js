import React from 'react';
import moment from 'moment-timezone';
import './AverageGap.css';

export function computeAverageDifference(data) {
  let totalDiff = 0;
  for (let i = 0; i < data.length - 1; i++) {
    let curr = data[i].timestamp;
    let next = data[i + 1].timestamp;
    totalDiff += next - curr;
  }
  return totalDiff / (data.length - 1);
}

export const AverageGap = (props) => {
  let aveDiff = computeAverageDifference(props.data);
  let period, segment;
  // except for 64ths
  if (+props.division <= 32) {
    period = moment.duration(aveDiff).asDays();
    segment = 'day';
  } else {
    period = moment.duration(aveDiff).asHours();
    segment = 'hour';
  }

  return (
    <div className="average-difference">
      Average difference between periods: {Math.round(period * 1000) / 1000} {segment}s
    </div>
  );
};
