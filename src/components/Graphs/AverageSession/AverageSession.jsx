import style from './AverageSession.module.scss';
import PropTypes from 'prop-types';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

/**
 * A custom tooltip component that displays data based on active state and payload values
 *
 * @param {Object} props - The props object containing active and payload values
 * @param {boolean} props.active - Indicates if tooltip is active or not
 * @param {Array<Object>} props.payload - Array of objects containing data to be displayed in tooltip
 * @returns {JSX.Element|null} - A React component that displays tooltip or null if tooltip is inactive
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={style.customTooltip}>
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Displays average session chart
 *
 * @param {Object} props - The props object containing data
 * @param {Array<Object>} props.data -  An array of data that display average session chart with
 * @returns {React.ReactElement} - React component that displays average session chart
 */

export const AverageSession = ({ data }) => {
  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h3 className={style.title}>Durée moyenne des <br /> sessions</h3>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--white)" stopOpacity={0.2} />
              <stop offset="100%" stopColor="var(--white)" stopOpacity={1} />
            </linearGradient>
          </defs>

          <YAxis hide={true} domain={['dataMin - 20', 'dataMax + 20']} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="var(--transparent-grey)"
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
            cursor={false}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{r: 4}}
            strokeWidth={2.5}
            stroke="url(#lineGradient)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

AverageSession.propTypes = {
  data: PropTypes.array.isRequired,
};
