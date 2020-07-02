import { combineReducers } from 'redux';
import usuario from './usuario';
import consulta from './consulta';
import recetario from './recetario';

export default combineReducers({
  usuario,
  consulta,
  recetario
});