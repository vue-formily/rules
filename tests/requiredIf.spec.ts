import { Field, createFormily } from '@vue-formily/formily';
import { requiredIf } from '@/.';

const formily = createFormily();

formily.register(Field);

describe('requiredIf', () => {
  test('Validator', async () => {
    expect(requiredIf(true).validator(null)).toBe(false);
    expect(requiredIf(false).validator(null)).toBe(true);
    expect(requiredIf(() => true).validator(null)).toBe(false);
    expect(requiredIf(() => false).validator(null)).toBe(true);
    expect(requiredIf(true).validator(null)).toBe(false);
    expect(requiredIf(true).validator(undefined)).toBe(false);
    expect(requiredIf(true).validator(false)).toBe(true);
    expect(requiredIf(true).validator([])).toBe(false);
    expect(requiredIf(true).validator({})).toBe(false);
    expect(requiredIf(true).validator({ a: 1 })).toBe(true);
    expect(requiredIf(true).validator([1])).toBe(true);
    expect(requiredIf(true).validator('')).toBe(false);
    expect(requiredIf(true).validator(' ')).toBe(true);
  });
});
