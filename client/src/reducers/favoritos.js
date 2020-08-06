import { BUSCAR_USUARIO_EXITO, AGREGAR_FAVORITO } from '../actions/actionTypes';

export default function favoritos(state = [], action) {
  switch (action.type) {
    case BUSCAR_USUARIO_EXITO:
      return action.payload.favorites;
    case AGREGAR_FAVORITO:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}
