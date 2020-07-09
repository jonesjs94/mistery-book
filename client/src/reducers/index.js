import { combineReducers } from 'redux';
import usuario from './usuario';
import consulta from './consulta';
import recetaActual from './recetaActual';
import recetario from './recetario';
import favoritos from './favoritos';
import historial from './historial';

export default combineReducers({
  usuario,
  consulta,
  recetaActual,
  recetario,
  favoritos,
  historial
});