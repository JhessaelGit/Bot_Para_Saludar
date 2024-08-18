function saludar(nombre, genero, edad) {
  let saludo;
  genero = genero.toLowerCase();

  if (edad >= 30) {
    if (genero === "masculino") {
      saludo = "Hola Señor " + nombre;
    } else {
      saludo = "Hola Señora " + nombre;
    }
  } else {
    if (genero === "masculino") {
      saludo = "Hola Joven " + nombre;
    } else {
      saludo = "Hola Señorita " + nombre;
    }
  }

  return saludo;
}

export default saludar;
