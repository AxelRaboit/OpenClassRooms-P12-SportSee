/**
 * @param {Array<Object>}
 * @returns {number}
 */
export const scoreFormat = (data) => {
  const score = data.score;
  const todayScore = data.todayScore;

  return score || todayScore;
};
