import { activityFormat, averageSessionFormat, performanceFormat, scoreFormat } from './index';

/**
 * @param {Array<Object>} activitySessions
 * @param {Array<Object>} performances
 * @param {Array<Object>} user
 * @param {Array<Object>} averageSessions
 * @returns {Array<Object>} Return array with all data formatted
 */
export const globalFormat = ({
  activitySessions,
  performances,
  user,
  averageSessions,
}) => {

  // Chart data
  const activitySection = activityFormat(activitySessions);
  const averageSection = averageSessionFormat(averageSessions);
  const performanceSection = performanceFormat(performances);
  const scoreSection = scoreFormat(user);

  const nameDisplay = user.userInfos.firstName;

  const nutriCard = user.keyData;
  const calories = `${nutriCard.calorieCount}kCal`;
  const protein = `${nutriCard.proteinCount}g`;
  const carbo = `${nutriCard.carbohydrateCount}g`;
  const lipid = `${nutriCard.lipidCount}g`;

  // Pass to the components as props (see Main.jsx)
  return {
    activitySection,
    averageSection,
    performanceSection,
    scoreSection,
    nameDisplay,
    calories,
    protein,
    carbo,
    lipid,
  };
};
