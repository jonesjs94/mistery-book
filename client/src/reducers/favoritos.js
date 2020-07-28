import { BUSCAR_USUARIO_EXITO } from '../actions/actionTypes';

export default function favoritos(state = [], action) {
  switch (action.type) {
    case BUSCAR_USUARIO_EXITO:
      return action.payload.favorites;
    default:
      return state;
  }
}