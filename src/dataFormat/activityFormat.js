/**
 * @param {string} date
 * @returns {number} Return last number of string as number
 */
const stringToNum = (date) => {
  const lastNumber = date.charAt(date.length - 1);
  const toNum = parseInt(lastNumber);
  return toNum;
};

/**
 * @param {string} sessions
 * @returns {number} Return array of objects with day, kilogram and calories
 */
export const activityFormat = (sessions) => {
  return sessions.map(({ day, kilogram, calories }) => ({
    day: stringToNum(day),
    kilogram,
    calories,
  }));
};
