import {
  INGRESA_USUARIO,
  ESTABLECE_CONSULTA,
  ESTABLECE_RECETA,
  ESTABLECE_RECETARIO,
  AGREGA_A_HISTORIAL
} from './actionTypes';
import { store } from '../store';
// Librería para manejar el objeto Date
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

export const ingresa_usuario =(usuario) => ({
  type: INGRESA_USUARIO,
  payload: usuario
});

export const establece_receta = (receta) => ({
  type: ESTABLECE_RECETA,
  payload: receta
});

export const agrega_a_historial = (historial) => ({
  type: AGREGA_A_HISTORIAL,
  payload: historial
});

const establece_consulta = (consulta) => ({
  type: ESTABLECE_CONSULTA,
  payload: consulta
});

const establece_recetario = (recetario) => ({
  type: ESTABLECE_RECETARIO,
  payload: recetario 
});

/**
 * Creador de acción para request a la API de recetas 'Spoonacular'. 
 * Despacha 3 secciones del Estado -> Historial, Consulta, Recetario
 * 
 * @param {String} consulta - Texto de la búsqueda 
 */
export const busca_recetas = consulta => {
  console.log("Obteniendo recetas...");
  return dispatch => {
    const apiKey = "03d842cc1cbc4535bf140ca81c4578ac";

    return fetch(`https://api.spoonacular.com/recipes/random?number=8&tags=${consulta},&apiKey=${apiKey}`)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(recetario => {
      console.log(`Recetas obtenidas.`);
      if (recetario.recipes.length) {
        // Despacha objeto de historia al estado y a la DB si existe un usuario
        guarda_busqueda(consulta, recetario.recipes);
      
        // Despacha consulta, recetas e historia al estado
        dispatch(establece_consulta(consulta)); 
        dispatch(establece_recetario(recetario.recipes));
      } else {
        console.log("No hay receta con esa consulta.")
      }
    })
    .catch((e) => console.error(e))
  }
}


const guarda_busqueda = (consulta, recetario) => {
  const estado = store.getState();
  const recetas = recetario.map(receta => {
    const datos = {
      nombre: receta.title,
      imagen: receta.image,
      id: receta.id
    }
    return datos
  })
  let fecha = moment().format("h:mm a, D [de] MMMM YYYY");
  
  const historia = { 
      consulta,
      recetario: recetas,
      fecha
  } 

  store.dispatch(agrega_a_historial(historia));

  // ---- Si hay usuario en sesión, almaceno búsqueda en la DB ----
  const usuarioActivo = estado.usuario;
  if (usuarioActivo) {
    const cabecera = new Headers();
    cabecera.set("Content-Type", "application/json");
    
    fetch('/history', {
      method: 'POST',
      headers: cabecera,
      body: JSON.stringify(historia)
    })
    .then(respuesta => respuesta.json())
    .then(resultado => {
      console.log(resultado);
    })
    .catch(e => console.error);
  }
}