import React, { Component } from 'react';
import './App.css';
import { data } from './util/makeDivisions.js';
import { AverageGap } from './AverageGap';
import { HeaderSelectors } from './HeaderSelectors';
import { Segments } from './Segments';
const moment = require('moment-timezone');

const NOW = new Date();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      zone: moment.tz.guess(),
      division: '1',
      startYear: NOW.getFullYear(),
      endYear: NOW.getFullYear()
    };
  }

  componentDidMount() {
    console.log(`guessing local time zone ${this.state.zone}`);
  }

  handleOptionChange(key, val) {
    this.setState({ [key]: val });
  }

  render() {
    let dataSegment = this.state.data.filter(
      (x) =>
        x.year >= this.state.startYear &&
        x.year <= this.state.endYear &&
        Object.keys(x.division).includes(this.state.division)
    );

    // { "division": { "2": true, "4": true, "8": true, "16": true, "32": true, "64": true, "exactSeason": true ...

    return (
      <div className="App">
        <header className="App-header">
          Solstice Equinox Subdivisions
          <HeaderSelectors
            startYear={this.state.startYear}
            endYear={this.state.endYear}
            onSelectChange={(key, val) => this.handleOptionChange(key, val)}
          />
        </header>
        <AverageGap data={dataSegment} division={this.state.division} />
        <Segments data={dataSegment} division={this.state.division} zone={this.state.zone} />
      </div>
    );
  }
}

export default App;
