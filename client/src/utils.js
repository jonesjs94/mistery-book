import { store } from './store';
import { 
  establecer_favoritos, 
  establecer_usuario, 
  establecer_historial,
  agregar_a_historial
} from './actions';


/**
 * Guarda en el estado al usuario junto a sus favoritos e historial si es que los tiene
 * @param {object} usuarioActual - usuario que acaba de entrar o crear cuenta 
 */
export function instancearUsuario(usuarioActual) {
  const { favorites, username, history } = usuarioActual;

  store.dispatch(establecer_usuario(username));

  if (favorites) store.dispatch(establecer_favoritos(favorites));
  if (history) store.dispatch(establecer_historial(history));
}


/**
 * Guarda búsqueda realizada en el historial del estado
 * @param {string} consulta - Consulta de la búsqueda
 * @param {object} recetario - Resultado de la búsqueda
 */
export function instancearHistorial(consulta, recetario) {
  const historial = {
    consulta,
    recetario
  }
  store.dispatch(agregar_a_historial(historial));
  guardarHistorial();
}

/**
 * Guarda la última búsqueda en el servidor
 */
function guardarHistorial() {
  const estado = store.getState();
  //Si hay usuario en sesión, almaceno búsqueda en la DB
  const usuarioActivo = estado.usuario;
  if (usuarioActivo) {
    debugger;
    const historial = estado.historial;

    const ultimaBusqueda = Object.keys(historial).length ? 
      historial[Object.keys(historial).length - 1] : historial[0];

    console.log(ultimaBusqueda);
  //   fetch('/history', {
  //     method: 'POST',
  //     body: JSON.stringify(ultimaBusqueda)
  //   })
  //   .then(respuesta => respuesta.json())
  //   .then(resultado => {
  //     console.log(resultado);
  //   })
  //   .catch(e => console.error);
  }
}