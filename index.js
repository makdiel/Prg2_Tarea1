var colors = require('colors');
const prompt = require('prompt-sync')();


console.log("Funcion para operaciones aritmeticas basicas".green);

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
operacionesMatematicas();
//var nombre = prompt("Por favor, ingrese su nombre:");
//console.log("Hola, " + nombre);
