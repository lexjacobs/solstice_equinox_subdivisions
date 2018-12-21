import React, { Component } from 'react';
import './App.css';
import { data } from './util/makeDivisions.js';

const NOW = new Date();
const START_YEAR = 1970;
const END_YEAR = 2070;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data,
			timezone: null,
			division: 'exactSeason',
			startYear: NOW.getFullYear(),
			endYear: NOW.getFullYear()
		};
	}
	render() {
		let renderData = this.state.data
			.filter((x) => x.year >= this.state.startYear && x.year <= this.state.endYear)
			.filter((x) => {
				return Object.keys(x.division).includes(this.state.division);
			})
			.map((x, i) => (
				<div key={i}>
					{JSON.stringify(x, null, 4)}
					<br />
					<br />
				</div>
			));

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
						<label htmlFor="season-division">Subdivide Seasons into:</label>
						<select
							onChange={(e) => {
								this.setState({
									division: e.target.value
								});
							}}
							id="season-division"
						>
							<option value="exactSeason">Exact</option>
							<option value="2">Halves</option>
							<option value="4">Quarters</option>
							<option value="8">Eighths</option>
							<option value="16">16ths</option>
							<option value="32">32nds</option>
							<option value="64">64ths</option>
						</select>

						<label htmlFor="start-year">Start year</label>
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
						<label htmlFor="end-year">End year</label>
						<select
							onChange={(e) => {
								this.setState({ endYear: +e.target.value });
							}}
							value={this.state.endYear}
							id="end-year"
						>
							{endYearOptions}
						</select>
					</nav>
				</header>
				<main>{renderData}</main>
			</div>
		);
	}
}

export default App;
