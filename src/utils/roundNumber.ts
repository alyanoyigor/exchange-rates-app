export const roundNumber = (number: number, floatNumber: number) => {
  return (
    Math.round(number * Math.pow(10, floatNumber)) / Math.pow(10, floatNumber)
  ).toFixed(floatNumber);
};
