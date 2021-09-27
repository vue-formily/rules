import { Form, Field, createFormily, defineSchema } from '@vue-formily/formily';
import { minLength } from '@/.';
import { createForm } from './helpers';

const formily = createFormily();

formily.register(Field);

describe('minLength', () => {
  test('Validator', async () => {
    expect(minLength.validator('')).toBe(true);
    expect(minLength.validator('abc')).toBe(true);
    expect(minLength.validator('abc', { minLength: 3 })).toBe(true);
    expect(minLength.validator('ad', { minLength: 3 })).toBe(false);
    expect(minLength.validator([1, 2], { minLength: 2 })).toBe(true);
    expect(minLength.validator([1], { minLength: 2 })).toBe(false);
    expect(minLength.validator({ a: 1, b: 2 }, { minLength: 2 })).toBe(true);
    expect(minLength.validator({ a: 1 }, { minLength: 2 })).toBe(false);
  });

  it('Should apply only for "string", "enum", "set" Field', async () => {
    const form = createForm(
      defineSchema({
        formId: 'test',
        props: {
          minLength: 1
        },
        rules: [minLength],
        fields: [
          {
            formId: 'a',
            props: {
              minLength: 2
            },
            rules: [minLength]
          },
          {
            formId: 'b',
            group: {
              fields: [
                {
                  formId: 'c'
                }
              ]
            },
            props: {
              minLength: 1
            },
            rules: [minLength]
          }
        ]
      })
    );

    await form.setValue({
      a: 'abc',
      b: [{ c: '1' }, { c: '2' }]
    });

    form.on('validated', () => {
      expect('minLength' in form.validation).toBe(true);
      expect(form.a.valid).toBe(true);
      expect(form.b.valid).toBe(true);
    });
  });
});
