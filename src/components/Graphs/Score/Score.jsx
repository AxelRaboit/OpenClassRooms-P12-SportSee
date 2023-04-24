import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import style from './Score.module.scss';
import PropTypes from 'prop-types';

const COLORS = ['red', 'transparent'];

/**
 * A chart component that displays activity bar chart based on data
 *
 * @param {Object} props - The props object containing data
 * @param {number} props.data -  A number to display score chart
 * @returns {React.ReactElement} Score chart
 */

export const Score = ({ data }) => {
  const bgData = [{ value: 1 }];
  const scoreData = [{ value: data }, { value: 1 - data }];

  return (
    <div className={style.container}>
      <p className={style.title}>Score</p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={bgData}
            dataKey="value"
            innerRadius={90}
            outerRadius={100}
            blendStroke={true}
            isAnimationActive={false}
            fill="#fff"
          >
            <Label
              value={`${Math.round(data * 100)}%`}
              position="center"
              dx={0}
              dy={-10}
              fill="var(--black)"
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            />
            <Label
              value="de votre objectif"
              position="center"
              dx={0}
              dy={20}
              fill="var(--neutral-600)"
              style={{ fontSize: 'var(--fs-medium)', fontWeight: 'bold' }}
            />
          </Pie>
          <Pie
            data={scoreData}
            dataKey="value"
            innerRadius={90}
            outerRadius={100}
            startAngle={90}
            endAngle={450}
            cornerRadius="50%"
            blendStroke={true}
          >
            {scoreData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

Score.propTypes = {
  data: PropTypes.number.isRequired,
};
