import style from './Performance.module.scss';
import PropTypes from 'prop-types';

import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

/**
 * Displays performance chart
 *
 * @param {Object} props - The props object containing data
 * @param {Array<Object>} props.data -  An array of data that display performance chart with
 * @returns {React.ReactElement} Performance chart
 */

export const Performance = ({ data }) => {
  return (
    <div className={style.container}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={data}
          outerRadius="60%"
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar
            name="Mike"
            dataKey="value"
            fill="var(--red)"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

Performance.propTypes = {
  data: PropTypes.array.isRequired,
};
