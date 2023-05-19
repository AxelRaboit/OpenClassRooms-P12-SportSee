/**
 * @param {Array<Object>} data
 * @returns {number} Return score or todayScore
 */
export const scoreFormat = (data) => {
  const score = data.score;
  const todayScore = data.todayScore;

  return score || todayScore;
};
