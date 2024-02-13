export const useCurrency = (value: number | string) => {
  const valueToReturn = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value ?? 0;
  const options = {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    minimumIntegerDigits: 1,
  };

  return valueToReturn.toLocaleString('en-US', options);
};
