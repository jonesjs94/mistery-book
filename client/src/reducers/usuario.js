import { ESTABLECER_USUARIO } from '../actions/actionTypes';

export default function usuario(state = "", action) {
  switch (action.type) {
    case ESTABLECER_USUARIO:
      return action.payload;
    default: 
      return state;
  }
}