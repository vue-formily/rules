import { isNumeric } from '@vue-formily/util';

export const validator = (value: string) => isNumeric(value);

const schema = {
  validator,
  name: 'numeric',
  for: ['string']
};

export default schema;
