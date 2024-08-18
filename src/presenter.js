import saludarEspaniol from "./saludarEspaniol";
import saludarIngles from "./saludarIngles";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const edad = document.querySelector("#edad");
const genero = document.querySelector("#genero");
const idioma = document.querySelector("#idioma");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nom = nombre.value;
  const gen = genero.value;
  const idi = idioma.value;
  const ed = Number.parseInt(edad.value);
  if(idi==="ingles")
  {
    div.innerHTML = "<p>" + saludarIngles(nom,gen,ed) + "</p>";
  }
  else
  {
    div.innerHTML = "<p>" + saludarEspaniol(nom,gen,ed) + "</p>";
  }
  
});
