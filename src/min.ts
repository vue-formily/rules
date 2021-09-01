export const validator = (value: any, { min = -Infinity }: Record<string, number | Date> = {}) => {
  return value !== null && +value >= +min;
};

const schema = {
  validator,
  name: 'min',
  for: ['number', 'date']
};

export default schema;
