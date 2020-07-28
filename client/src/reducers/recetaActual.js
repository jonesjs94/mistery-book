import { ABRIR_RECETA } from '../actions/actionTypes';

export default function recetaActual(state = "", action) {
  switch (action.type) {
    case ABRIR_RECETA:
      return action.payload;
    default:
      return state;  
  }
}