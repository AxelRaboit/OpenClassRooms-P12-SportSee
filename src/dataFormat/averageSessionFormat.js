const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

/**
 * @param {Array<Object>}
 * @returns {Array<Object>}
 */
export const averageSessionFormat = (sessions) => {
  return sessions.map(({ day, sessionLength }) => ({
    day: days[day - 1],
    sessionLength: sessionLength,
  }));
};

