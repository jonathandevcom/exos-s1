export const ADD_VALUE = '[PRODUCTS] ADD_NEW_VALUE';
export const REMOVE_ONE_VALUE = '[PRODUCTS] REMOVE_ONE_VALUE';

export function add(value: number) {
  return {
    type: ADD_VALUE,
    payload: value,
  };
}

export function remove(index: number) {
  return {
    type: REMOVE_ONE_VALUE,
    payload: index,
  };
}
