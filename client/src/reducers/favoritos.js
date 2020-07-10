import { INGRESAR_USUARIO } from '../actions/actionTypes';

export default function favoritos(state = {}, action) {
  switch (action.type) {
    case INGRESAR_USUARIO:
      return action.payload.favorites;
    default:
      return state;
  }
}