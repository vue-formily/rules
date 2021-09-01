import { isEmpty } from '@vue-formily/util';

export const validator = (value: any) => !isEmpty(value);

const schema = {
  validator,
  name: 'required'
};

export default schema;
