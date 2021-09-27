import { Field, createFormily, defineSchema } from '@vue-formily/formily';
import { max } from '@/.';
import { createForm } from './helpers';

const formily = createFormily();

formily.register(Field);

describe('max', () => {
  test('Validator', async () => {
    expect(max.validator('')).toBe(true);
    expect(max.validator('', { max: 3 })).toBe(true);
    expect(max.validator('1', { max: 3 })).toBe(true);
    expect(max.validator(3, { max: 3 })).toBe(true);
    expect(max.validator(3)).toBe(true);
    expect(max.validator('abc', { max: 3 })).toBe(false);
    expect(max.validator('-1', { max: -2 })).toBe(false);
    expect(max.validator(1, { max: 2 })).toBe(true);
    expect(max.validator(null, { max: 2 })).toBe(false);
    expect(max.validator(undefined, { max: 2 })).toBe(false);
    expect(max.validator(3, { max: 2 })).toBe(false);
    expect(max.validator(new Date('1/1/21'), { max: new Date('2/1/21') })).toBe(true);
  });

  it('Should apply only for "date" and "number" Field', async () => {
    const form = createForm(
      defineSchema({
        formId: 'test',
        fields: [
          {
            formId: 'a',
            value: 'test',
            rules: [max]
          },
          {
            formId: 'b',
            type: 'number',
            value: '1',
            props: {
              max: 2
            },
            rules: [max]
          },
          {
            formId: 'c',
            type: 'date',
            value: '1/1/21',
            props: {
              max: new Date('2/1/21')
            },
            rules: [max]
          }
        ]
      })
    );

    form.on('validated', () => {
      expect(form.a.valid).toBe(true);
      expect(form.b.valid).toBe(true);
      expect(form.c.valid).toBe(true);
    });
  });
});
