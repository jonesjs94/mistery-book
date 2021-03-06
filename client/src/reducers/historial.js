import {
  BUSCAR_USUARIO_EXITO,
  RETIRAR_USUARIO_EXITO,
  AGREGAR_HISTORIAL
} from './../actions/actionTypes';

const initialState = []

export default function historial(state = initialState, action) {
  switch (action.type) {
    case BUSCAR_USUARIO_EXITO:
      return action.payload.history.reverse();
    case AGREGAR_HISTORIAL:
      // Key con el que se va a guardar la historia.
      // Tomo el último Key del estado si es que existe y le sumo 1, sino 
      // el Key va a ser 0 ya que no existen valores anteriores.
      // const id = Object.keys(state).length ? +Object.keys(state).pop()+1 : 0;
      return [action.payload, ...state]
    case RETIRAR_USUARIO_EXITO:
      return initialState;
    default:
      return state;
  }
}