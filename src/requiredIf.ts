import { defineSchema } from '@vue-formily/formily';
import { isEmpty, isFunction } from '@vue-formily/util';

export const validator = (value: any) => !isEmpty(value);

export default (condition: boolean | ((this: any, ...args: any[]) => boolean)) => {
  return defineSchema({
    validator(value: any, ...args: any[]) {
      const shouldValidate = isFunction(condition) ? condition.call(this, value, ...args) : condition;

      return shouldValidate ? validator.call(this, value) : true;
    },
    name: 'requiredif'
  });
};
