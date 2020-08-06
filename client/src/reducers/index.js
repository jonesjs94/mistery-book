import { combineReducers } from 'redux';
import usuario from './usuario';
import consulta from './consulta';
import receta from './receta';
import recetario from './recetario';
import favoritos from './favoritos';
import historial from './historial';

export default combineReducers({
  usuario,
  consulta,
  receta,
  recetario,
  favoritos,
  historial
});