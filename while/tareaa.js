/**
 * desarrolle 2 funciones, ambas reciben como parametros un numero entero n 
 * la primera debe retornar true si el entero inicia con 9
 * la segunda retorna true si el numero termina con 9
 */
var n = 9;
var res = 0;
termina(9,1,23,4,5,6,7,8,9);
function inicia(n=91) {
    var res = parseInt(n / 10);
    while (res>10) {
        res = parseInt(n / 10);
    }
        if (res == 9){
        console.log(true);
    } else {
        console.log(false);
    }
}
console.log(res==9);


var m = 9;
function termina(m) {
    if (m % 10 == 9) {
        return false;
    }
}
console.log('termina en:9',m == 9);
termina(9,1,23,4,5,6,7,8,9);
