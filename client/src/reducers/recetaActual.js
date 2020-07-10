import { ESTABLECE_RECETA } from '../actions/actionTypes';

export default function recetaActual(state = "", action) {
  switch (action.type) {
    case ESTABLECE_RECETA:
      return action.payload;
    default:
      return state;  
  }
}