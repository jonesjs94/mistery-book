import {
  BUSCAR_USUARIO_PENDIENTE,
  BUSCAR_USUARIO_EXITO,
  BUSCAR_USUARIO_ERROR,
  BUSCAR_RECETARIO_PENDIENTE,
  BUSCAR_RECETARIO_EXITO,
  BUSCAR_RECETARIO_ERROR,
  BUSCAR_RECETA_PENDIENTE,
  BUSCAR_RECETA_EXITO,
  BUSCAR_RECETA_ERROR,  
  GUARDAR_CONSULTA,
  AGREGAR_HISTORIAL,
  AGREGAR_FAVORITO,
  REMOVER_FAVORITO
} from './actionTypes';
import { store } from '../store';
// Librería para manejar el objeto Date
import moment from 'moment';
import 'moment/locale/en-gb';
moment.locale('en-gb');

// ------------ FAVORITO ------------
export const agregarFavorito = (receta) => {
  guardarEnDB(receta, "/favorites")
  return { 
    type: AGREGAR_FAVORITO,
    payload: receta
  }
};

export const removerFavorito = (idReceta) => {
  eliminarEnDB(`/favorites/delete/${idReceta}`);
  return {
    type: REMOVER_FAVORITO,
    payload: idReceta
  }
};

// ------------ CONSULTA  ------------
const guardarConsulta = (consulta) => ({
  type: GUARDAR_CONSULTA,
  payload: consulta
});


// -----------------------------------
// ------------ RECETA --------------
// -----------------------------------

const buscarRecetaPendiente = () => {
  return {
    type: BUSCAR_RECETA_PENDIENTE
  }
}

const buscarRecetaExito = (receta) => {
  return {
    type: BUSCAR_RECETA_EXITO,
    payload: receta
  }
}

const buscarRecetaError = (error) => {
  return {
    type: BUSCAR_RECETA_ERROR,
    payload: error
  }
}

/**
 * Creador de acción para búsqueda a la API.
 * Despacha 3 estados -> consulta / recetario / historial.
 * 
 * @param {String} consulta - Texto de la búsqueda 
 */
export const buscarReceta = (id) => {
  return dispatch => {
    dispatch(buscarRecetaPendiente());
    console.log(`Obteniendo receta ...`);
    const apiKey = "03d842cc1cbc4535bf140ca81c4578ac";
    fetch(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=${apiKey}`)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(receta => {
      console.log(`Receta obtenida.`);
      dispatch(buscarRecetaExito(receta));
    })
    .catch(e => {
      console.error(e);
      dispatch(buscarRecetaError(e));
    })
  }
}
 // -----------------------------------


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
    content: true,
    payload: usuario
  }
}

const buscarUsuarioError = (error) => {
  return {
    type: BUSCAR_USUARIO_ERROR,
    content: false,
    payload: error
  }
}

/**
 * Solicitud al servidor para obtener datos del usuario
 * 
 * @param {object} usuario 
 * @param {string} url 
 */
export const buscarUsuario = (usuario, path) => {
  return dispatch => {
    const url = "https://mistery-book.herokuapp.com/" + path;
    const cabecera = new Headers();
    cabecera.set("Content-Type", "application/json");
    dispatch(buscarUsuarioPendiente());
    
    fetch(url, {
      method: 'POST',
      headers: cabecera,
      body: JSON.stringify(usuario)
    })
    .then(respuesta => respuesta.json())
    .then(usuarioEncontrado => {
      dispatch(buscarUsuarioExito(usuarioEncontrado));
      console.log(usuarioEncontrado);
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

const buscarRecetarioExito = (recetario) => {
  return {
    type: BUSCAR_RECETARIO_EXITO,
    payload: recetario
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
export const buscarRecetario = (query) => {
  const consulta = query.toLowerCase();
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
  let fecha = moment().format("h:mm a. MMMM D[th], YYYY");
  
  // Objeto de la historia
  const historia = { 
    consulta,
    recetario: recetas,
    fecha
  }

  guardarEnDB(historia, "/history");

  return {
    type: AGREGAR_HISTORIAL,
    payload: historia
  }
}

// -----------------------------------

/**
 * Almacena historia o favorito en la base de datos si hay un usuario logueado
 * 
 * @param {object} objeto
 */
const guardarEnDB = (objecto, url) => {
  const estado = store.getState();
  const usuarioActivo = estado.usuario;

  if (usuarioActivo) {
    const cabecera = new Headers();
    cabecera.set("Content-Type", "application/json");
    
    fetch(url, {
      method: 'POST',
      headers: cabecera,
      body: JSON.stringify(objecto)
    })
    .then(respuesta => respuesta.json())
    .then(resultado => {
      console.log("objeto guardado en la DB", resultado);
    })
    .catch(e => console.error);
  }
}


/**
 * Elimina historia o favorito en la base de datos si hay un usuario logueado
 * 
 * @param {object} objeto
 */
const eliminarEnDB = (url) => {
  const estado = store.getState();
  const usuarioActivo = estado.usuario;

  if (usuarioActivo) {
    fetch(url)
  }
}