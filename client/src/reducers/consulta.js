import { GUARDAR_CONSULTA } from './../actions/actionTypes';

export default function consulta(state = "", action) {
  switch (action.type) {
    case GUARDAR_CONSULTA:
      return action.payload;
    default:
      return state;
  }
}