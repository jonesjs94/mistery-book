import {
  BUSCAR_USUARIO_PENDIENTE,
  BUSCAR_USUARIO_EXITO,
  BUSCAR_USUARIO_ERROR,
  BUSCAR_RECETARIO_PENDIENTE,
  BUSCAR_RECETARIO_EXITO,
  BUSCAR_RECETARIO_ERROR,
  GUARDAR_CONSULTA,
  AGREGAR_HISTORIAL,
  AGREGAR_FAVORITO,
  ABRIR_RECETA
} from './actionTypes';
import { store } from '../store';
// Librería para manejar el objeto Date
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');


// ------------ RECETA ------------
export const abrirReceta = (receta) => ({
  type: ABRIR_RECETA,
  payload: receta
});

// ------------ FAVORITO ------------
export const agregarFavorito = (favorito) => ({
  type: AGREGAR_FAVORITO,
  payload: favorito
});

// ------------ CONSULTA  ------------
const guardarConsulta = (consulta) => ({
  type: GUARDAR_CONSULTA,
  payload: consulta
});


// -----------------------------------
// ------------- USUARIO -------------
// -----------------------------------

 const buscarUsuarioPendiente = () => {
  return {
    type: BUSCAR_USUARIO_PENDIENTE
  }
}

export const buscarUsuarioExito = (usuario) => {
  return {
    type: BUSCAR_USUARIO_EXITO,
    payload: usuario
  }
}

const buscarUsuarioError = (error) => {
  return {
    type: BUSCAR_USUARIO_ERROR,
    payload: error
  }
}

/**
 * Solicitud al servidor para obtener datos del usuario
 * 
 * @param {object} usuario 
 */
export const buscarUsuario = (usuario) => {
  return dispatch => {
      const cabecera = new Headers();
      cabecera.set("Content-Type", "application/json");
      dispatch(buscarUsuarioPendiente());

      const { url } = usuario;
      delete usuario["url"];
      
      fetch(url, {
        method: 'POST',
        headers: cabecera,
        body: JSON.stringify(usuario)
      })
      .then(respuesta => respuesta.json())
      .then(usuario => {
        dispatch(buscarUsuarioExito(usuario));
        console.log(usuario);
      })
      .catch((e) => {
        console.error(e);
        dispatch(buscarUsuarioError(e));
      }) 
  }
}
// -----------------------------------


// -----------------------------------
// ------------ RECETARIO ------------
// -----------------------------------

 const buscarRecetarioPendiente = () => {
  return {
    type: BUSCAR_RECETARIO_PENDIENTE
  }
}

const buscarRecetarioExito = (RECETARIO) => {
  return {
    type: BUSCAR_RECETARIO_EXITO,
    payload: RECETARIO
  }
}

const buscarRecetarioError = (error) => {
  return {
    type: BUSCAR_RECETARIO_ERROR,
    payload: error
  }
}

/**
 * Creador de acción para búsqueda a la API.
 * Despacha 3 estados -> consulta / recetario / historial.
 * 
 * @param {String} consulta - Texto de la búsqueda 
 */
export const buscarRecetario = (consulta) => {
  return dispatch => {
    console.log("Obteniendo recetas...");
    dispatch(guardarConsulta(consulta));
    dispatch(buscarRecetarioPendiente());
    
    const apiKey = "03d842cc1cbc4535bf140ca81c4578ac";
    fetch(`https://api.spoonacular.com/recipes/random?number=8&tags=${consulta},&apiKey=${apiKey}`)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(recetario => {
      console.log(`Recetas obtenidas.`);
      dispatch(buscarRecetarioExito(recetario.recipes));

      // Despacha objeto de historia al estado y a la DB si existe usuario logueado
      if (recetario.recipes.length) 
        dispatch(agregarHistorial(consulta, recetario.recipes));
    })
    .catch(e => {
      console.error(e);
      dispatch(buscarRecetarioError(e));
    })
  }
}
 // -----------------------------------



// -----------------------------------
// ------------ HISTORIAL ------------
// -----------------------------------

const agregarHistorial = (consulta, recetario) => {
  // Obtiene datos para almacenar en historial
  const recetas = recetario.map(receta => {
    const datos = {
      nombre: receta.title,
      imagen: receta.image,
      id: receta.id
    }
    return datos
  })
  let fecha = moment().format("h:mm a, D [de] MMMM YYYY");
  
  // Objeto de la historia
  const historia = { 
    consulta,
    recetario: recetas,
    fecha
  }

  guardarHistoriaDB(historia);

  return {
    type: AGREGAR_HISTORIAL,
    payload: historia
  }
}

/**
 * Almacena historia en la base de datos si hay un usuario logueado
 * 
 * @param {object} historia
 */
const guardarHistoriaDB = (historia) => {
    const estado = store.getState();
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

// -----------------------------------