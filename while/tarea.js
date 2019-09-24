/**
 * RETO:
 * LLenar un arreglo con 20 numeros aleatorios
 * usando el ciclo while y la libreria Math(Math.random)
 */
/**
 * RETO:
 * LLenar un arreglo con 20 numeros aleatorios
 * usando el ciclo while y la libreria Math(Math.random)
 * y calcular el promedio de los numeros.
 */
/**
 * RETO:
 * LLenar un arreglo con 20 numeros aleatorios
 * usando el ciclo while y la libreria Math(Math.random)
 * y calcular el promedio de los numeros impares.
 */

var numero = [];
var i = 1;
while (i <= 20) {
    var numeros = Math.floor(Math.random()*(20 - 1))-1;
    numero.push(numeros)
    i = i +1;
}
console.log(numero);

