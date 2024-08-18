function saludarIngles(nombre, genero, edad) {
    let saludo;
    genero = genero.toLowerCase();
  
    if (edad >= 30) {
      if (genero === "masculino") {
        saludo = "Hello Sir " + nombre;
      } else {
        saludo = "Hello Madam " + nombre;
      }
    } else {
      if (genero === "masculino") {
        saludo = "Hello Young Man " + nombre;
      } else {
        saludo = "Hello Miss " + nombre;
      }
    }
  
    return saludo;
  }
  
  export default saludarIngles;
  