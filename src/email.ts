import { defineSchema } from '@vue-formily/formily';

const remail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validator = (value: string | null) => {
  return value !== null && (!value.length || remail.test(value));
};

const schema = defineSchema({
  validator,
  name: 'email',
  for: ['string']
});

export default schema;
