import {
  ESTABLECER_USUARIO,
  ESTABLECER_CONSULTA,
  ESTABLECER_RECETA,
  ESTABLECER_RECETARIO,
  ESTABLECER_FAVORITOS,
  ESTABLECER_HISTORIAL,
  AGREGAR_A_HISTORIAL
} from './actionTypes';

export const establecer_usuario = (usuario) => ({
  type: ESTABLECER_USUARIO,
  payload: usuario
});

export const establecer_consulta = (consulta) => ({
  type: ESTABLECER_CONSULTA,
  payload: consulta
});

export const establecer_receta = (receta) => ({
  type: ESTABLECER_RECETA,
  payload: receta
});

export const establecer_recetario = (recetario) => ({
  type: ESTABLECER_RECETARIO,
  payload: recetario 
});

export const establecer_favoritos = (favoritos) => ({
  type: ESTABLECER_FAVORITOS,
  payload: favoritos
}); 

// ------------- Historial -------------

export const establecer_historial = (historial) => ({
  type: ESTABLECER_HISTORIAL,
  payload: historial
}); 

export const agregar_a_historial = (historial) => ({
  type: AGREGAR_A_HISTORIAL,
  payload: historial
})