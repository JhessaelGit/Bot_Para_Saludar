function saludarEspaniol(nombre, genero, edad) {
  let saludo;
  genero = genero.toLowerCase();

  if (edad >= 30) {
    if (genero === "m") {
      saludo = "Hola Señor " + nombre;
    } else {
      saludo = "Hola Señora " + nombre;
    }
  } else {
    if (genero === "m") {
      saludo = "Hola Joven " + nombre;
    } else {
      saludo = "Hola Señorita " + nombre;
    }
  }

  return saludo;
}

export default saludarEspaniol;
