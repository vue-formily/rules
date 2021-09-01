import { getLength } from './utils';

export const validator = (value: any, { maxLength = Infinity }: Record<string, number> = {}) => {
  return getLength(value) <= maxLength;
};

const schema = {
  validator,
  name: 'maxLength',
  cascade: true,
  for: ['string', 'enum', 'set']
};

export default schema;
