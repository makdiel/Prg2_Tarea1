var colors = require('colors');
const prompt = require('prompt-sync')();
const libro = require('./Model/libros')

//console.log("Funcion para operaciones aritmeticas basicas".green);

//constructor(nombre, descripcion, reseña, nombreautor, apellidoautor, genero, tipopublico, fechapublicacion) {

const libro1 = new libro("FORMACIÓN JURÍDICA",
    "La presente obra es fruto de la pretensión de ofrecer una herramienta que trate todas las materias extrasanitarias propias de una profesión sanitaria titulad",
    " servir de apoyo en la formación universitaria de las personas tituladas y también de aquellas ejercientes que no tuvieron la ocasión",
    "Francisco Jose", "Ojuelos Gomez", " técnico-jurídico", "General", "18/Marz/2024",1,90)


const libro2 = new libro("Aquella tarde de la última primavera",
    "Lombo recoge en esta obra algo más de una veintena de poemas escritos en su totalidad en tres días",
    "Más allá de su aparentemente inequívoca temática romántica, representa para el autor un viaje personal de introspección, autoconocimiento y liberación",
    "Javier Lombo", "Rodriguez", " técnico-jurídico", "Poesía", "18/Feb/2024",2,80)

const libro3 = new libro("Calmar la sed",
    "En mi cabeza se abrió paso un verso, “calmar la sed”, y a su alrededor giró todo lo demás: la sed, la ira, el miedo, la lluvia, el incendio..",
    "palabras que brotaban de un manantial que hervía a fuerza de querer apagarlo, en un ritornelo implacable",
    "Charo", "Ruano", " técnico-jurídico", "Poesía", "18/Feb/2024",2,95)

//var numString = "3.14";
//var num = parseFloat(numString);
//console.log(num); // Imprime: 3.14

function operacionesMatematicas() {
    // Solicitar al usuario que ingrese dos números
    var num1 = prompt("Ingrese el primer número: ");
    var num2 = prompt("Ingrese el segundo número: ");

    // Realizar operaciones matemáticas
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;

    // Mostrar resultados
    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);
}

// Llamar a la función
//operacionesMatematicas();

//var nombre = prompt("Por favor, ingrese su nombre:");
//console.log("Hola, " + nombre);

let mostrarlibros = [libro1,libro2]

//crudo-select
//Select * FROM libros

console.log("En esta seccion solo muestro los libros inicializados")
console.log(mostrarlibros)

//crudo-insert
//INSERT
mostrarlibros.push(libro3)

console.log("En esta seccion Muestro los libros despues de insertar un nuevo libro")
console.log(mostrarlibros)

//crudo-filtrar
//Obtener por indice el nombre del libro
console.log("En esta seccion solo muestro el nombre del libro en la posicion 1")
console.log(mostrarlibros[1].nombre)

//crud-filtrar
//select libros Where genero = 2
const GeneroPoesia = mostrarlibros.find(elemento => elemento.idgenero === 2)
console.log("En esta seccion solo muestro el nombre del libro cuyo id genero es:2")
console.log(GeneroPoesia.nombre)

//crud-update
GeneroPoesia.puntaje = 100
console.log("En esta seccion solo muestro el nombre del libro que fue actualizado en el puntaje")
console.log(`autor:,  ${GeneroPoesia.nombreautor}, Libro : ${GeneroPoesia.nombre} Puntaje : ${GeneroPoesia.puntaje} `)

//
//DELETE FROM libros WHERE idgenero = 1
mostrarlibros = mostrarlibros.filter(elemento => elemento.idgenero !== 1)
console.log("En esta seccion solo muestro el nombre del libro despues del delete")
//console.log(`autor:,  ${mostrarlibros.nombreautor}, Libro : ${mostrarlibros.nombre} `)

console.log(mostrarlibros)

console.log("For each publicaciones de libros")
mostrarlibros.forEach(function(fila){
    //console.log(fila.nombre, fila.apellido)
   console.log( fila.publicarlibros())
})





