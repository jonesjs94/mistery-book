import { BUSCAR_USUARIO_EXITO, AGREGAR_FAVORITO, REMOVER_FAVORITO } from '../actions/actionTypes';

export default function favoritos(state = [], action) {
  switch (action.type) {
    case BUSCAR_USUARIO_EXITO:
      return action.payload.favorites;
    case AGREGAR_FAVORITO:
      return [
        ...state,
        action.payload
      ];
    case REMOVER_FAVORITO:
      return state.filter(recipe => recipe.id !== action.payload);
    default:
      return state;
  }
}
