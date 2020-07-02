/**
 * Envía un request a la API de Spoontacular: "https://spoonacular.com/food-api".
 * Obtiene 5 recetas en formato JSON. 
 * Con la ayuda de la función "crearTarjeta" crea contenedores con la info de las recetas y las adjunta
 * al contenedor de "resultados"
 * 
 */
export default async function encontrarRecetas(valor) {
    const apiKey = "03d842cc1cbc4535bf140ca81c4578ac";
    
    const respuesta = await fetch(`https://api.spoonacular.com/recipes/random?number=8&tags=${valor},&apiKey=${apiKey}`);
    const resultado = await respuesta.json();
    
   if (respuesta.status !== 200 || resultado.recipes === undefined) {
      throw Error("No hay recetas de esa comida");
   }
   console.log(resultado.recipes)
   return resultado.recipes;
 }

