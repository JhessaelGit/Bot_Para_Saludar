import saludarEspaniol from "../saludarEspaniol";
import saludarIngles from "../saludarIngles";

function saludador(nombre, genero,edad,idioma)
{
    let saludo;
    if (idioma == "es"){
        saludo=saludarEspaniol(nombre,genero,edad);
    }
    else if (idioma == "en"){
        saludo=saludarIngles(nombre,genero,edad);
    }

    return saludo;
}

export default saludador;
