import {
  BUSCAR_USUARIO_PENDIENTE,
  BUSCAR_USUARIO_EXITO,
  BUSCAR_USUARIO_ERROR
} from '../actions/actionTypes';

const initialState = {
  cargando: false,
  nombre: "",
  error: ""
}

export default function usuario(state = initialState, action) {
  switch (action.type) {
    case BUSCAR_USUARIO_PENDIENTE:
      return {
        ...state,
        cargando: true
      }
    case BUSCAR_USUARIO_EXITO:
      return {
        cargando: false,
        nombre: action.payload.username,
        error: ""
      }
    case BUSCAR_USUARIO_ERROR:
      return {
        ...state,
        cargando: false,
        error: action.payload.error
      }          
    default:
      return state;
  }
}