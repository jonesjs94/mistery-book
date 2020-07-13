import { INGRESA_USUARIO } from '../actions/actionTypes';

export default function favoritos(state = [], action) {
  switch (action.type) {
    case INGRESA_USUARIO:
      return action.payload.favorites;
    default:
      return state;
  }
}