import {
  INGRESA_USUARIO,
  AGREGA_A_HISTORIAL
} from './../actions/actionTypes';

export default function historial(state = [], action) {
  switch (action.type) {
    case INGRESA_USUARIO:
      return action.payload.history.reverse();
    case AGREGA_A_HISTORIAL:
      // Key con el que se va a guardar la historia.
      // Tomo el último Key del estado si es que existe y le sumo 1, sino 
      // el Key va a ser 0 ya que no existen valores anteriores.
      // const id = Object.keys(state).length ? +Object.keys(state).pop()+1 : 0;
      return [action.payload, ...state]
    default:
      return state;
  }
}