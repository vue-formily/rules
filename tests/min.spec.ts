import { Field, createFormily, defineSchema } from '@vue-formily/formily';
import { min } from '@/.';
import { createForm } from './helpers';

const formily = createFormily();

formily.register(Field);

describe('min', () => {
  test('Validator', async () => {
    expect(min.validator('')).toBe(true);
    expect(min.validator('', { min: 3 })).toBe(false);
    expect(min.validator('1', { min: 3 })).toBe(false);
    expect(min.validator(3, { min: 3 })).toBe(true);
    expect(min.validator(3)).toBe(true);
    expect(min.validator('abc', { min: 3 })).toBe(false);
    expect(min.validator('-1', { min: -2 })).toBe(true);
    expect(min.validator(1, { min: 2 })).toBe(false);
    expect(min.validator(null, { min: 2 })).toBe(false);
    expect(min.validator(undefined, { min: 2 })).toBe(false);
    expect(min.validator(3, { min: 2 })).toBe(true);
    expect(min.validator(new Date('1/1/21'), { min: new Date('2/1/21') })).toBe(false);
  });

  it('Should apply only for "date" and "number" Field', async () => {
    const form = createForm(
      defineSchema({
        formId: 'test',
        fields: [
          {
            formId: 'a',
            value: 'test',
            rules: [min]
          },
          {
            formId: 'b',
            type: 'number',
            value: '1',
            props: {
              min: 2
            },
            rules: [min]
          },
          {
            formId: 'c',
            type: 'date',
            value: '1/1/21',
            props: {
              min: new Date('2/1/21')
            },
            rules: [min]
          }
        ]
      })
    );

    form.on('validated', () => {
      expect(form.a.valid).toBe(true);
      expect(form.b.valid).toBe(false);
      expect(form.c.valid).toBe(false);
    });
  });
});
