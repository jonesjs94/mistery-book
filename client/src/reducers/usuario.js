import { INGRESA_USUARIO } from '../actions/actionTypes';

export default function usuario(state = "", action) {
  switch (action.type) {
    case INGRESA_USUARIO:
      return action.payload.username;
    default: 
      return state;
  }
}