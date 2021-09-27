import { Form, FormInstance, FormSchema, ReadonlySchema } from '@vue-formily/formily';

export function createForm<F extends ReadonlySchema<FormSchema>>(schema: F) {
  return new Form(schema as unknown as FormSchema) as unknown as FormInstance<F>;
}
