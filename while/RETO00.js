/**
 * dedo un arreglo de numeros , ejemplo:
 * [3,6,3,8,4,7,22,86,2,1,6,7,55,99,20,10]
 * encontrar e imprimir el numros mayor de los elementos del arreglo.
 */
var list = [3,6,3,8,4,7,22,86,2,1,6,7,55,99,20,10];
var i = 0;
var numMayor = 0;
for (var i=0; i < list.length;i++){
    if (numMayor < list[i]) {
        numMayor = list[i];
    }
}
console.log('El numero mayor es:',numMayor);
