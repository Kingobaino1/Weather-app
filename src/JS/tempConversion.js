const deg = (value) => {
  const twoDecimalPoints = (value * (9 / 5) + 32);
  const result = Math.round(twoDecimalPoints * 100) / 100;
  return `${result}°F`;
};

export default deg;
