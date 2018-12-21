import React, { Component } from 'react';
import './App.css';
import { data } from './util/makeDivisions.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data,
			timezone: null,
			division: 1
		};
	}
	render() {
		let renderData = this.state.data.map((x, i) => <div key={i}>{JSON.stringify(x, null, 4)}</div>);

		return (
			<div className="App">
				<header className="App-header">Solstice Equinox Subdivisions</header>
				<main>{renderData}</main>
			</div>
		);
	}
}

export default App;
