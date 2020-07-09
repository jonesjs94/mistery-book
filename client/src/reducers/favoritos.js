import { ESTABLECER_FAVORITOS } from '../actions/actionTypes';

export default function favoritos(state = [], action) {
  switch (action.type) {
    case ESTABLECER_FAVORITOS:
      return action.payload;
    default:
      return state;
  }
}