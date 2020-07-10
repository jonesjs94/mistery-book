import { ESTABLECE_CONSULTA } from './../actions/actionTypes';

export default function consulta(state = "", action) {
  switch (action.type) {
    case ESTABLECE_CONSULTA:
      return action.payload;
    default:
      return state;
  }
}