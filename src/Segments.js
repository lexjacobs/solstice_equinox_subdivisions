import React from 'react';
import moment from 'moment-timezone';
import './Segments.css';

const FORMAT_DAY = 'ddd, MMM DD, YYYY';
const FORMAT_TIME = 'HH:mm:ss.SSS (zz) Z';

export const Segments = (props) => {
  let renderData = props.data.map((x, i) => {
    // exact season

    return (
      <div key={i}>
        {i % props.division === 0 ? (
          <span className="exact-season">{`${x.season.slice(0, 1).toUpperCase()}${x.season
            .slice(1)
            .toLowerCase()}, ${x.year}`}</span>
        ) : (
          <span className="fraction-season">
            {`${x.season.slice(0, 1).toUpperCase()}${x.season.slice(1).toLowerCase()}, ${x.year} ${'+ ' +
              i % props.division}${'/' + props.division}`}
          </span>
        )}
        <pre>{moment.tz(x.timestamp, props.zone).format(FORMAT_DAY)}</pre>
        <pre>{moment.tz(x.timestamp, props.zone).format(FORMAT_TIME)}</pre>
        <br />
      </div>
    );
  });

  return <main>{renderData}</main>;
};
