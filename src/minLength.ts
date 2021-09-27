import { defineSchema } from '@vue-formily/formily';
import { getLength } from './utils';

export const validator = (value: any, { minLength = -Infinity }: Record<string, number> = {}) => {
  return getLength(value) >= minLength;
};

const schema = defineSchema({
  validator,
  name: 'minLength',
  cascade: true,
  for: ['string', 'enum', 'set']
});

export default schema;
