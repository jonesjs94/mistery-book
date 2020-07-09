import { ESTABLECER_RECETARIO } from './../actions/actionTypes';


export default function recetario(state = {}, action) {
  switch (action.type) {
    case ESTABLECER_RECETARIO:
      return action.payload;
    default:
      return state;
  }
}