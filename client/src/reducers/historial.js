import {
  INGRESAR_USUARIO,
  AGREGAR_A_HISTORIAL
} from './../actions/actionTypes';

export default function historial(state = {}, action) {
  switch (action.type) {
    case INGRESAR_USUARIO:
      return action.payload.history;
    case AGREGAR_A_HISTORIAL:
      // Key con el que se va a guardar la historia.
      // Tomo el último Key del estado si es que existe y le sumo 1, sino 
      // el Key va a ser 0 ya que no existen valores anteriores.
      const id = Object.keys(state).length ? +Object.keys(state).pop()+1 : 0;
      return {
        ...state,
        [id]: {
          ...action.payload, 
          fecha: new Date()
        }
      }
    default:
      return state;
  }
}