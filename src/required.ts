import { defineSchema } from '@vue-formily/formily';
import { isEmpty } from '@vue-formily/util';

export const validator = (value: any) => !isEmpty(value);

const schema = defineSchema({
  validator,
  name: 'required'
});

export default schema;
