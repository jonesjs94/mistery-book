import {
  BUSCAR_RECETARIO_PENDIENTE,
  BUSCAR_RECETARIO_EXITO,
  BUSCAR_RECETARIO_ERROR
} from './../actions/actionTypes';

const initialState = {
  cargando: false, 
  data: [],
  error: ""
}

export default function recetario(state = initialState, action) {
  switch (action.type) {
    case BUSCAR_RECETARIO_PENDIENTE:
      return {
        ...state,
        cargando: true
      }
    case BUSCAR_RECETARIO_EXITO:
      return {
        cargando: false,
        data: action.payload,
        error: ""
      }
    case BUSCAR_RECETARIO_ERROR:
      return {
        ...state,
        cargando: false,
        error: action.payload
      }          
    default:
      return state;
  }
}