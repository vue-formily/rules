import { Field, createFormily, defineSchema } from '@vue-formily/formily';
import { maxLength } from '@/.';
import { createForm } from './helpers';

const formily = createFormily();

formily.register(Field);

describe('maxLength', () => {
  test('Validator', async () => {
    expect(maxLength.validator('')).toBe(true);
    expect(maxLength.validator('abc')).toBe(true);
    expect(maxLength.validator('abc', { maxLength: 3 })).toBe(true);
    expect(maxLength.validator('abcd', { maxLength: 3 })).toBe(false);
    expect(maxLength.validator([1], { maxLength: 2 })).toBe(true);
    expect(maxLength.validator([1, 2, 3], { maxLength: 2 })).toBe(false);
    expect(maxLength.validator({ a: 1 }, { maxLength: 2 })).toBe(true);
    expect(maxLength.validator({ a: 1, b: 1 }, { maxLength: 1 })).toBe(false);
  });

  it('Should apply only for "string", "enum", "set" Field', async () => {
    const form = createForm(
      defineSchema({
        formId: 'test',
        props: {
          maxLength: 1
        },
        // cascade by default
        rules: [maxLength],
        fields: [
          {
            formId: 'a',
            props: {
              maxLength: 2
            }
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
              maxLength: 1
            }
          }
        ]
      })
    );

    await form.setValue({
      a: 'abc',
      b: [{ c: '1' }, { c: '2' }]
    });

    form.on('validated', () => {
      expect('maxLength' in form.validation).toBe(true);
      expect(form.a.valid).toBe(false);
      expect(form.b.valid).toBe(false);
    });
  });
});
