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


alert (`Primero vamos a definir los personajes`);

//PERSONAJES

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

    //variables para convertir si y no por un precio
    let formaAntropomorficaAdicion = (formaAntropomorfica == 'no') ? 0: 10;
    let extremidadesAdicion = (extremidades == 'no') ? 0: 10;
    let peloLargoAdicion = (peloLargo == 'no') ? 0: 10;
    let expresionesComplejasAdicion = (expresionesComplejas == 'no') ? 0: 10;

    //Objeto constructor de personajes
    class Personaje {
        constructor(nombre, formaAntropomorficaAdicion, extremidadesAdicion, peloLargoAdicion, expresionesComplejasAdicion) {
            this.nombre = nombre;
            this.formaAntropomorficaAdicion = formaAntropomorficaAdicion;
            this.extremidadesAdicion = extremidadesAdicion;
            this.peloLargoAdicion = peloLargoAdicion;
            this.expresionesComplejasAdicion = expresionesComplejasAdicion;
            this.precioBase = 50;
        }
    }
    
    const personaje = new Personaje  (nombre, formaAntropomorficaAdicion, extremidadesAdicion, peloLargoAdicion, expresionesComplejasAdicion);

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

let listadoPrecioPersonajes = []
//for of para sacar el valor de personaje

for (const personajes of listaPersonajes) {
    let precioPersonaje = personajes.formaAntropomorficaAdicion + personajes.extremidadesAdicion + personajes.peloLargoAdicion + personajes.expresionesComplejasAdicion + personajes.precioBase
    listadoPrecioPersonajes.push(precioPersonaje)
    console.log (`el precio de ${personajes.nombre} es ${precioPersonaje} USD`)
}

console.log(listadoPrecioPersonajes);

let precioTotalPersonajes = 0;

for (let i = 0; i < listadoPrecioPersonajes.length; i++) {
    precioTotalPersonajes += listadoPrecioPersonajes[i]
}

console.log(`El precio total de los personajes es ${precioTotalPersonajes}`);


//ESCENARIOS 

alert (`Ahora vamos a definir los escenarios`);

function elegirTipoEscenarios () {

    tipoEscenarios = prompt("¿qué tipo de escenarios tiene tu video? Escribe sencillos o complejos.").toLowerCase()

    while ((tipoEscenarios != "sencillos") && (tipoEscenarios != "complejos")) {
        tipoEscenarios = prompt("Elije una opción válida. Sencillos o complejos").toLowerCase();
    }

    if (tipoEscenarios == "sencillos") {
        tipoEscenarios = 75;
        console.log (`Elegiste escenarios sencillos`)
        return (tipoEscenarios)
    } else {
        tipoEscenarios = 150;
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

alert (`Ahora vamos a definir que tipo de animación tendra tu video`);

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

precioTotal = (precioMinutoAnimacion * cantidadMinutos) + precioEscenarios + precioTotalPersonajes

console.log (`El valor total del video es $${precioTotal}USD`);

alert (`El valor total del video es $${precioTotal}USD`);
