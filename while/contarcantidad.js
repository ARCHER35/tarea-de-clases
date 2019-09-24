/**
 * elabore una funcion que permita contar la cantidad de veces que se repite una palabra en una lista
 * la funcion de recibir 2 argumentos:
 * una lista de palabras.
 * una palabra (la palabra que se desea cuantas veces se repitre).
 * la funcion debe retornar un numero entero que es la cantidad de veces que se repite las palabras
 * por ejemplo:
 * lista:[juan,pedro,auto,casa,auto,silla,auto,auto]
 * palabra: auto
 * cantidad de repeticiones: 4
 */
var cant = "";
function buscarPalabra(list = ["juan", "pedro", "auto", "casa", "auto", "silla", "auto", "auto"], palabra = "auto") {
    for (let i = 0; i < list.length; i++) {
        if (palabra === list[i]) {
            cant = list[i] + "";
            console.log(cant);
        }
        else {
            console.log("la cantidad de autos es: ");

        }
    }
    return cant;
}
console.log(buscarPalabra());
