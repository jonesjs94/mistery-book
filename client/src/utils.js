import { store } from './store';
import { 
  agregar_a_historial
} from './actions';


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