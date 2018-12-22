import React from 'react';
import moment from 'moment-timezone';

const START_YEAR = 1970;
const END_YEAR = 2070;

export const HeaderSelectors = (props) => {
  var startYearOptions = [];
  for (let i = START_YEAR; i <= END_YEAR; i++) {
    startYearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  var endYearOptions = [];
  for (let i = props.startYear; i <= END_YEAR; i++) {
    endYearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <nav>
      <label htmlFor="season-division">Subdivide: </label>
      <select
        onChange={(e) => {
          props.onSelectChange('division', e.target.value);
        }}
        id="season-division"
      >
        <option value="1">Exact</option>
        <option value="2">Halves</option>
        <option value="4">Quarters</option>
        <option value="8">Eighths</option>
        <option value="16">16ths</option>
        <option value="32">32nds</option>
        <option value="64">64ths</option>
      </select>

      <label htmlFor="timezone">Timezone: </label>
      <select
        onChange={(e) => {
          props.onSelectChange('zone', e.target.value);
        }}
        id="timezone"
      >
        <option value={moment.tz.guess()}>Current Detected ({moment.tz(moment.tz.guess()).format('z')})</option>
        <option value="US/Pacific">Pacific Time</option>
        <option value="US/Mountain">Mountain Time</option>
        <option value="US/Central">Central Time</option>
        <option value="US/Eastern">Eastern Time</option>
        <option value="GMT">GMT</option>
      </select>

      <br />

      <label htmlFor="start-year">Start: </label>
      <select
        value={props.startYear}
        id="start-year"
        onChange={(e) => {
          props.onSelectChange('startYear', +e.target.value);
          props.onSelectChange('endYear', props.endYear < +e.target.value ? +e.target.value : props.endYear);
        }}
      >
        {startYearOptions}
      </select>
      <label htmlFor="end-year">End: </label>
      <select
        onChange={(e) => {
          props.onSelectChange('endYear', +e.target.value);
        }}
        value={props.endYear}
        id="end-year"
      >
        {endYearOptions}
      </select>
    </nav>
  );
};
