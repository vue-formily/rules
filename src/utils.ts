import { isPlainObject, isString } from '@vue-formily/util';

export function getLength(value: any): number {
  if (Array.isArray(value)) {
    return value.length;
  }

  if (value !== null && isPlainObject(value)) {
    return Object.keys(value).length;
  }

  if (isString(value)) {
    return value.length;
  }

  return 0;
}
