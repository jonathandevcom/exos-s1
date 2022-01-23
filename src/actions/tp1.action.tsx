export const ADD_VALUE = '[ARTICLES] ADD_NEW_VALUE';
export const REMOVE_ONE_VALUE = '[ARTICLES] REMOVE_ONE_VALUE';

export function add(value) {
  return {
    type: ADD_VALUE,
    payload: value,
  };
}

export function remove(index) {
  return {
    type: REMOVE_ONE_VALUE,
    payload: index,
  };
}
