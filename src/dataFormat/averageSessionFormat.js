const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

/**
 * @param {Array<Object>} Array of objects with day and sessionLength
 * @returns {Array<Object>} Return array of objects with day and sessionLength
 */
export const averageSessionFormat = (sessions) => {
  return sessions.map(({ day, sessionLength }) => ({
    day: days[day - 1],
    sessionLength: sessionLength,
  }));
};

