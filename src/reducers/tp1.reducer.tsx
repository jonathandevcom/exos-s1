import { ADD_VALUE, REMOVE_ONE_VALUE } from '../actions/index.actions';

const initialState = [
  'Premiere valeur',
  'Deuxieme valeur',
  'Troisiement valeur'
];

export default function articlesReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_VALUE:
      return [...state, action.payload]
    case REMOVE_ONE_VALUE:
      return state.filter((val, index) => index !== action.payload);
    default:
      return state;
  }
}
