/**
 * dado un arreglo 20 valores enteros, se desa conocer
 * a)la cantidad de valores negativos 
 * b)la cantidad de valores de multiplos de 15
 * c)el valor acumulado de los numero que son pares 
 * ejemplo:[3,4,-7,10,30,5,67,80,20,60]
 */
cant =0;
var i = 0;
var list =[3,4,-7,10,-30,5,67,-80,20,60,-99,-1];
function cantNegativos(listNum) {
    var sumaNegativo = 0;
    for (let i = 0; i < listNum.length; i++) { 
        if (listNum[i]< 0) {
            sumaNegativo = sumaNegativo + 1
        }   
    }
    return sumaNegativo;
}
console.log(cantNegativos(list));
