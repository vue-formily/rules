import { defineSchema } from '@vue-formily/formily';

export const validator = (value: any, { min = -Infinity }: Record<string, number | Date> = {}) => {
  return value !== null && +value >= +min;
};

const schema = defineSchema({
  validator,
  name: 'min',
  for: ['number', 'date']
});

export default schema;
