import React, { Component } from 'react';
import './App.css';
import { data } from './util/makeDivisions.js';
const moment = require('moment-timezone');

const NOW = new Date();
const START_YEAR = 1970;
const END_YEAR = 2070;
const FORMAT = '**MMM DD, YYYY HH:mm:ss:SSS Z**';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data,
			zone: moment.tz.guess(),
			division: '0',
			startYear: NOW.getFullYear(),
			endYear: NOW.getFullYear()
		};
	}

	componentDidMount() {
		console.log(`guessing local time zone ${this.state.zone}`);
	}

	render() {
		let renderData = this.state.data
			.filter((x) => x.year >= this.state.startYear && x.year <= this.state.endYear)
			.filter((x) => {
				return Object.keys(x.division).includes(this.state.division);
			})
			.map((x, i) => {
				return (
					<div key={i}>
						{`${x.season}, ${x.year} ${this.state.division === '0'
							? ''
							: '+ ' + i % this.state.division}${this.state.division === '0'
							? ''
							: '/' + this.state.division} ${moment.tz(x.timestamp, this.state.zone).format(FORMAT)}`}
						<br />
						<br />
					</div>
				);
			});

		var startYearOptions = [];
		for (let i = START_YEAR; i <= END_YEAR; i++) {
			startYearOptions.push(
				<option key={i} value={i}>
					{i}
				</option>
			);
		}
		var endYearOptions = [];
		for (let i = this.state.startYear; i <= END_YEAR; i++) {
			endYearOptions.push(
				<option key={i} value={i}>
					{i}
				</option>
			);
		}

		// { "division": { "2": true, "4": true, "8": true, "16": true, "32": true, "64": true, "exactSeason": true ...

		return (
			<div className="App">
				<header className="App-header">
					Solstice Equinox Subdivisions
					<nav>
						<label htmlFor="season-division">Subdivide: </label>
						<select
							onChange={(e) => {
								this.setState({
									division: e.target.value
								});
							}}
							id="season-division"
						>
							<option value="0">Exact</option>
							<option value="2">Halves</option>
							<option value="4">Quarters</option>
							<option value="8">Eighths</option>
							<option value="16">16ths</option>
							<option value="32">32nds</option>
							<option value="64">64ths</option>
						</select>

						<label htmlFor="start-year">Start: </label>
						<select
							value={this.state.startYear}
							id="start-year"
							onChange={(e) => {
								e.persist();
								this.setState(() => {
									return {
										startYear: +e.target.value,
										endYear:
											this.state.endYear < +e.target.value ? +e.target.value : this.state.endYear
									};
								});
							}}
						>
							{startYearOptions}
						</select>
						<label htmlFor="end-year">End: </label>
						<select
							onChange={(e) => {
								this.setState({ endYear: +e.target.value });
							}}
							value={this.state.endYear}
							id="end-year"
						>
							{endYearOptions}
						</select>

						<label htmlFor="timezone">Timezone: </label>
						<select
							onChange={(e) => {
								this.setState({
									zone: e.target.value
								});
							}}
							id="timezone"
						>
							<option value={moment.tz.guess()}>Current Detected</option>
							<option value="US/Pacific">Pacific Time</option>
							<option value="US/Mountain">Mountain Time</option>
							<option value="US/Central">Central Time</option>
							<option value="US/Eastern">Eastern Time</option>
							<option value="GMT">GMT</option>
						</select>
					</nav>
				</header>
				<main>{renderData}</main>
			</div>
		);
	}
}

export default App;
