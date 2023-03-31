/**
 * @param {string}
 * @returns {number}
 */
const stringToNum = (date) => {
  const lastNumber = date.charAt(date.length - 1);
  const toNum = parseInt(lastNumber);
  return toNum;
};

/**
 * @param {string}
 * @returns {number}
 */
export const activityFormat = (sessions) => {
  return sessions.map(({ day, kilogram, calories }) => ({
    day: stringToNum(day),
    kilogram,
    calories,
  }));
};

