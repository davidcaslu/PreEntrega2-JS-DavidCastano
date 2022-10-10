/* 
Entregar la estructura del proyecto
las variables de JS necesarias
Funciones esenciales del proceso a simular
Objetos de JS,
Arrays
Métodos de búsqueda y filtrado sobre el array

Objetivos generales:
-Codificar la funcionalidad inicial del simulador.
-Identificar el flujo de trabajo del script en términos de captura de entradas
ingresadas por el usuario.
Procesamiento esencial del simulador y notificación de resultados en forma de salida.

Formato:
Página HTML y código fuente de JS. Debe identificar el apellido del alumno, en el nombre de archivo
comprimido por "PreEntrega2+Apellido"

Objetivos específicos:
-Capturar entradas mediante prompt()
-Declarar variables y objetos necesarios para simular el proceso seleccionado
-Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc)
-Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert () o
console.log ()



*/

//preguntar cuantos personajes son

//hacer un ciclo con la cantidad de personajes que se solicitaron creando un personaje con cada iteración.

// se crea un objeto por cada personaje  con cada iteración- debería retornar un valor por cada personaje

//los personajes tienen las características 
/* 
-tiene forma antropomorfica?
-tiene extremidades?
-tiene pelo largo?
-tiene expresiones complejas?

if true X valor if false Y valor por cada característica
*/

//pushear cada objeto a un array

//un array de los diferentes personajes - retornar la sumatoria de todo el array


//se suman los valores de cada array +  los tipos de escenarios

//se multiplica por los minutos de animacion

//se genera un descuento por la cantidad de minutos

//se entrega un precio total

//COTIZADOR DE VIDEOS DE ANIMACIÓN


//VARIABLES


let tipoPersonajes;
let precioPersonajes;

let tipoEscenarios;
let cantidadEscenarios;
let precioEscenarios

let tipoAnimacion;
let cantidadMinutos;
let precioMinutoAnimacion;

let precioTotal;

//BIENVENIDA


alert (`Hola! Te damos la bienvenida al cotizador de videos de animación. Completa los siguientes datos.`);



//PERSONAJES

/* 
-tiene forma antropomorfica?
-tiene extremidades?
-tiene pelo largo?
-tiene expresiones complejas?

if true X valor if false Y valor por cada característica
*/


//Función para construir personajes

let listaPersonajes = [];
let cantidadPersonajes = parseInt(prompt("¿Cuántos personajes tiene tu video?"));

const crearPersonaje =() => {

    //Variables usadas en la función
    let nombre = prompt("Cuál el nombre del personaje? Si no tiene, llámalo personaje1, personaje2...");
    let formaAntropomorfica = prompt("el personaje tiene forma antropomorfica? si/no").toLowerCase();
    let extremidades = prompt("El personaje tiene extremidades? si/no").toLowerCase();
    let peloLargo = prompt("El personaje tiene pelo largo? si/no").toLowerCase();
    let expresionesComplejas = prompt("El personaje tiene expresiones complejas? si/no").toLowerCase();

    
    let formaAntropomorficaBoolean = (formaAntropomorfica == 'no') ? false: true;
    let extremidadesBoolean = (extremidades == 'no') ? false: true;
    let peloLargoBoolean = (peloLargo == 'no') ? false: true;
    let expresionesComplejasBoolean = (expresionesComplejas == 'no') ? false: true;

    //Objeto constructor de personajes
    class Personaje {
        constructor(nombre, formaAntropomorficaBoolean, extremidadesBoolean, peloLargoBoolean, expresionesComplejasBoolean) {
            this.nombre = nombre;
            this.formaAntropomorfica = formaAntropomorficaBoolean;
            this.extremidades = extremidadesBoolean;
            this.peloLargo = peloLargoBoolean;
            this.expresionesComplejas = expresionesComplejasBoolean;
            this.precioBase = 100;
        }
    }
    
    const personaje = new Personaje  (nombre, formaAntropomorficaBoolean, extremidadesBoolean, peloLargoBoolean, expresionesComplejasBoolean);

    //push del objeto creado al array de personajes
    listaPersonajes.push(personaje);
    return personaje; 
}



//ciclo for para la creación de personajes, basados en la cantidad
for (let i = 1; i <= cantidadPersonajes; i = i + 1) {
    //console.log(`Personaje ${i}`)
    crearPersonaje();
};

console.log(listaPersonajes);


//forEach para sacar el valor de personaje

listaPersonajes.forEach ((personaje) => {
    let precioPersonaje = personaje.formaAntropomorficaBoolean + personaje.extremidadesBoolean + personaje.peloLargoBoolean + personaje.expresionesComplejasBoolean + personaje.precioBase
    console.log(`El personaje ${personaje.nombre} tiene como precio ${precioPersonaje} USD`)
    return precioPersonaje
})

/*

//PONERLE LÓGICA A LOS PERSONAJES PARA QUE TRUE Y FALSE SEAN CIERTO VALOR



CODIGO ENTREGA 1 PARA PERSONAJES

function elegirTipoPersonajes () {

    tipoPersonajes = prompt("¿qué tipo de personajes tiene tu video? Escribe sencillos o complejos.").toLowerCase()

    while ((tipoPersonajes != "sencillos") && (tipoPersonajes != "complejos")) {
        tipoPersonajes = prompt("Elije una opción válida. Sencillos o complejos").toLowerCase();
    }

    if (tipoPersonajes == "sencillos") {
        tipoPersonajes = 30;
        console.log (`Elegiste personajes sencillos`)
        return (tipoPersonajes)
    } else {
        tipoPersonajes = 70;
        console.log (`Elegiste personajes complejos`)
        return (tipoPersonajes)
    }
}

elegirTipoPersonajes ();

console.log (`El precio de los personajes que elegiste es $${tipoPersonajes}USD`)

cantidadPersonajes = parseInt(prompt("¿Cuántos personajes tiene tu video?"));

precioPersonajes = tipoPersonajes * cantidadPersonajes

console.log (`El valor total de los personajes de tu video es $${precioPersonajes}USD`);


CIERRE CÓDIGO ENTREGA 1 PERSONAJES
 */




/* 
CODIGO BUENO - NO CAMBIAR NADA POR AHORA



//ESCENARIOS 

function elegirTipoEscenarios () {

    tipoEscenarios = prompt("¿qué tipo de escenarios tiene tu video? Escribe sencillos o complejos.").toLowerCase()

    while ((tipoEscenarios != "sencillos") && (tipoEscenarios != "complejos")) {
        tipoEscenarios = prompt("Elije una opción válida. Sencillos o complejos").toLowerCase();
    }

    if (tipoEscenarios == "sencillos") {
        tipoEscenarios = 100;
        console.log (`Elegiste escenarios sencillos`)
        return (tipoEscenarios)
    } else {
        tipoEscenarios = 200;
        console.log (`Elegiste escenarios complejos`)
        return (tipoEscenarios)
    }
}

elegirTipoEscenarios ();

console.log (`El precio de los escenarios que elegiste es $${tipoEscenarios}USD`)

cantidadEscenarios = parseInt(prompt("¿Cuántos escenarios tiene tu video?"));

precioEscenarios = tipoEscenarios * cantidadEscenarios

console.log (`El valor total de los escenarios de tu video es $${precioEscenarios}USD`);


//TIPO DE ANIMACIÓN

function elegirTipoAnimacion () {

    tipoAnimacion = prompt("¿qué tipo de animación tiene tu video? Escribe tradicional o cutout.").toLowerCase()

    while ((tipoAnimacion != "tradicional") && (tipoAnimacion != "cutout")) {
        tipoAnimacion = prompt("Elije una opción válida. Tradicional o cutout").toLowerCase();
    }

    if (tipoAnimacion == "tradicional") {
        console.log (`Elegiste animación tradicional`)
        tipoAnimacion = 900;
        return (tipoAnimacion)
    } else {
        console.log (`Elegiste animación cutout`)
        tipoAnimacion = 300;
        return (tipoAnimacion)
    }
}


elegirTipoAnimacion ();

console.log (`El precio por minuto de la animación que elegiste es $${tipoAnimacion}USD`)


cantidadMinutos = parseFloat(prompt("¿Cuántos minutos dura tu video?"));

precioMinutoAnimacion = tipoAnimacion * cantidadMinutos

console.log (`El valor de cada minuto con las carácteristicas indicadas es de $${precioMinutoAnimacion}USD`);


//DESCUENTO POR DURACIÓN EN LA ANIMACIÓN

if (cantidadMinutos >= 3 && cantidadMinutos <=4) {
    precioMinutoAnimacion = precioMinutoAnimacion * 0.8
    console.log (`Tienes un descuento del 20% en la animación`)
} else if (cantidadMinutos >= 5) {
    precioMinutoAnimacion = precioMinutoAnimacion * 0.7
    console.log (`Tienes un descuento del 30% en la animación`)
} else (precioMinutoAnimacion);

precioTotal = (precioMinutoAnimacion * cantidadMinutos) + precioEscenarios + precioPersonajes

console.log (`El valor total del video es $${precioTotal}USD`);

alert (`El valor total del video es $${precioTotal}USD`);


CODIGO BUENO - NO CAMBIAR NADA POR AHORA

*/

