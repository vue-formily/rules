import { Field, createFormily, defineSchema } from '@vue-formily/formily';
import { email } from '@/.';
import { createForm } from './helpers';

const formily = createFormily();

formily.register(Field);

describe('email', () => {
  test('Validator', async () => {
    expect(email.validator('test@sda.com')).toBe(true);
    expect(email.validator('test@co.uk')).toBe(true);
    expect(email.validator('')).toBe(true);
    expect(email.validator('test@sda')).toBe(false);
    expect(email.validator('@sda')).toBe(false);
    expect(email.validator('test')).toBe(false);
    expect(email.validator(null)).toBe(false);
  });

  it('Should apply only for "string" Field', async () => {
    const form = createForm(
      defineSchema({
        formId: 'test',
        fields: [
          {
            formId: 'a',
            value: 'test',
            rules: [email]
          },
          {
            formId: 'b',
            type: 'number',
            value: 'test',
            rules: [email]
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
