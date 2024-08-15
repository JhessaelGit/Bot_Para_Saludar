import saludar from "./saludar";
import sumar from "./saludar";

const first = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = first.value;
  div.innerHTML = "<p>" + saludar(nombre) + "</p>";
});
