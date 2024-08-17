import saludar from "./saludar";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const genero = document.querySelector("#genero");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nom = nombre.value;
  const gen = genero.value;
  div.innerHTML = "<p>" + saludar(nom,gen) + "</p>";
});
