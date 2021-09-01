import { Field, VueFormily } from '@vue-formily/formily';
import { required } from '@/.';

VueFormily.register(Field);

describe('required', () => {
  test('Validator', async () => {
    expect(required.validator(null)).toBe(false);
    expect(required.validator(undefined)).toBe(false);
    expect(required.validator(false)).toBe(true);
    expect(required.validator([])).toBe(false);
    expect(required.validator({})).toBe(false);
    expect(required.validator({ a: 1 })).toBe(true);
    expect(required.validator([1])).toBe(true);
    expect(required.validator('')).toBe(false);
    expect(required.validator(' ')).toBe(true);
  });
});
