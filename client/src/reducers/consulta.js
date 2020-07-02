export default function consulta(state = "", action) {
  switch (action.type) {
    case "ESTABLECER_CONSULTA":
      return action.payload;
    default:
      return state;
  }
}