export const validator = (value: any, { max = Infinity }: Record<string, number | Date> = {}) => {
  return value !== null && +value <= +max;
};

const schema = {
  validator,
  name: 'max',
  for: ['number', 'date']
};

export default schema;
