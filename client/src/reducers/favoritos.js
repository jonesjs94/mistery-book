import { 
  BUSCAR_USUARIO_EXITO, 
  AGREGAR_FAVORITO, 
  REMOVER_FAVORITO,
  RETIRAR_USUARIO_EXITO 
} from '../actions/actionTypes';

const initialState = []

export default function favoritos(state = initialState, action) {
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
    case RETIRAR_USUARIO_EXITO:
      return initialState;
    default:
      return state;
  }
}
