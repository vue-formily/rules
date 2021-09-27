import { defineSchema } from '@vue-formily/formily';
import { isNumeric } from '@vue-formily/util';

export const validator = (value: string) => isNumeric(value);

const schema = defineSchema({
  validator,
  name: 'numeric',
  for: ['string']
});

export default schema;
