import style from './Activity.module.scss';
import BlackDot from '../../../assets/blackdot.png';
import RedDot from '../../../assets/reddot.png';
import PropTypes from 'prop-types';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
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
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Displays activity chart
 *
 * @param {Object} props - The props object containing data
 * @param {Array<Object>} props.data -  An array of data that display activity chart with
 * @returns {React.ReactElement} - React component that displays activity chart
 */

export const Activity = ({ data }) => {
  return (
    <div className={style.container}>
      <div className={style.legendWrap}>
        <h3 className={style.title}>Activité quotidienne</h3>
        <div className={style.legendContainerElements}>
          <div className={style.legendOne}>
            <span>
              <img src={BlackDot} alt="point noir" />
            </span>
            Poids (kg)
          </div>
          <div className={style.legendSecond}>
            <span>
              <img src={RedDot} alt="point rouge" />
            </span>
            Calories Brulées (kCal)
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} barGap={'5%'} margin={0} barSize={8}>
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          {/* dataKey day make reference to  key day in activityFormat.js */}
          {/* Schema Legend bottom displayed*/}
          <XAxis
            dataKey="day"
            tickLine={false}
            padding={{ right: 5 }}
            height={50}
            tickMargin={20}
          />
          {/* dataKey kilogram make reference to  key kilogram in activityFormat.js */}
          {/* Schema Legend right displayed*/}
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            domain={['dataMin - 2', 'dataMax + 1']}
            allowDecimals={false}
            orientation="right"
            tickMargin={20}
            axisLine={false}
            tickLine={false}
            tickCount={3}
          />
          {/* dataKey calories make reference to  key calories in activityFormat.js */}
          {/* Schema Legend  left hidden*/}
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            domain={[0, 'dataMax + 50']}
            hide={true}
            tickCount={3}
          />
          {/* Tooptip on hover */}
          <Tooltip
            allowEscapeViewBox={{ x: true }}
            offset={30}
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          {/* Black bar */}
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill="#282D30"
            radius={[20, 20, 0, 0]}
            animationDuration={2000}
            maxBarSize={5}
            legendType="circle"
          />
          {/* Red bar */}
          <Bar
            yAxisId="cal"
            dataKey="calories"
            fill="#E60000"
            radius={[20, 20, 0, 0]}
            animationDuration={2000}
            maxBarSize={5}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

Activity.propTypes = {
  data: PropTypes.array.isRequired,
};
