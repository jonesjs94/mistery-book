import {
  INGRESAR_USUARIO,
  ESTABLECER_CONSULTA,
  ESTABLECER_RECETA,
  ESTABLECER_RECETARIO,
  AGREGAR_A_HISTORIAL
} from './actionTypes';


export const ingresar_usuario =(usuario) => ({
  type: INGRESAR_USUARIO,
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


// ------------- Recetario -------------

const establecer_recetario = (recetario) => ({
  type: ESTABLECER_RECETARIO,
  payload: recetario 
});

/**
 * Creador de acción para request a la API de recetas 'Spoonacular'. 
 * 
 * @param {String} consulta - Texto de la búsqueda 
 */
export const obtener_recetario = consulta => {
  console.log("Obteniendo recetas...");
  return dispatch => {
    const apiKey = "03d842cc1cbc4535bf140ca81c4578ac";

    return fetch(`https://api.spoonacular.com/recipes/random?number=8&tags=${consulta},&apiKey=${apiKey}`)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(recetario => {
      console.log(`Recetas obtenidas.`);
      dispatch(establecer_recetario(recetario.recipes));
    })
    .catch((e) => console.error(e))
  }
}

// ------------- Historial -------------

export const agregar_a_historial = (historial) => ({
  type: AGREGAR_A_HISTORIAL,
  payload: historial
})

