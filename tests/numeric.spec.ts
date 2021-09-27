import { Field, createFormily, defineSchema } from '@vue-formily/formily';
import { numeric } from '@/.';
import { createForm } from './helpers';

const formily = createFormily();

formily.register(Field);

describe('numeric', () => {
  test('Validator', async () => {
    expect(numeric.validator('123')).toBe(true);
    expect(numeric.validator('123.12')).toBe(true);
    expect(numeric.validator('.12')).toBe(true);
    expect(numeric.validator('-.12')).toBe(true);
    expect(numeric.validator('-12.12')).toBe(true);
    expect(numeric.validator('12e12')).toBe(true);
    expect(numeric.validator(NaN as any)).toBe(false);
    expect(numeric.validator(null as any)).toBe(false);
    expect(numeric.validator([] as any)).toBe(false);
    expect(numeric.validator({} as any)).toBe(false);
    expect(numeric.validator(undefined as any)).toBe(false);
  });

  it('Should apply only for "string" Field', async () => {
    const form = createForm(
      defineSchema({
        formId: 'test',
        fields: [
          {
            formId: 'a',
            value: 'test',
            rules: [numeric]
          },
          {
            formId: 'b',
            type: 'number',
            value: 'test',
            rules: [numeric]
          }
        ]
      })
    );

    form.on('validated', () => {
      expect(form.a.valid).toBe(false);
      expect(form.b.valid).toBe(true);
    });
  });
});
