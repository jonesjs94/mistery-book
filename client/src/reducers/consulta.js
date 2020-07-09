import { BUSQUEDA_REALIZADA } from './../actions/actionTypes';

export default function consulta(state = "", action) {
  switch (action.type) {
    case BUSQUEDA_REALIZADA:
      return action.payload;
    default:
      return state;
  }
}