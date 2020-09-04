import { 
  BUSCAR_RECETA_PENDIENTE, 
  BUSCAR_RECETA_EXITO, 
  BUSCAR_RECETA_ERROR
} from '../actions/actionTypes';

const initialState = {
  cargando: false,
  content: false,
  data: {},
  error: ""
}

export default function receta(state = initialState, action) {
  switch (action.type) {
    case BUSCAR_RECETA_PENDIENTE:
      return {
        ...initialState,
        cargando: true
      }
    case BUSCAR_RECETA_EXITO:
      return {
        cargando: false,
        content: true,
        data: action.payload,
        error: ""
      };      
    case BUSCAR_RECETA_ERROR:
      return {
        cargando: false,
        content: false,
        data: {},
        error: action.payload
      };  
    default:
      return state;  
  }
}