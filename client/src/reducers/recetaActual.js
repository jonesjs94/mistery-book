import { ESTABLECER_RECETA } from '../actions/actionTypes';

export default function recetaActual(state = "", action) {
  switch (action.type) {
    case ESTABLECER_RECETA:
      return action.payload;
    default:
      return state;  
  }
}