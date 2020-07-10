import { INGRESAR_USUARIO } from '../actions/actionTypes';

export default function usuario(state = "", action) {
  switch (action.type) {
    case INGRESAR_USUARIO:
      return action.payload.username;
    default: 
      return state;
  }
}