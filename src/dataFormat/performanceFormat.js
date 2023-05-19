/**
 * @param {Array<Object>} chartData
 * @returns {Array<Object>} Return array of objects with subject and value
 */
export const performanceFormat = (chartData) => {
  const categories = chartData.kind;
  const displayingData = chartData.data;

  return displayingData.map(({ value, kind }) => ({
    subject: categories[kind],
    value,
  }));
};

